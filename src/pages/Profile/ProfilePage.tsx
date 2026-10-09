import {
  useEffect,
  useState,
} from "react";

import type {
  CSSProperties,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  History,
  LogOut,
  Pencil,
  Save,
  Smartphone,
  Sparkles,
  UserRound,
  WalletCards,
  X,
} from "lucide-react";

import {
  ApiError,
} from "@/api/client";

import {
  getCustomerDashboard,
  getCustomerMembershipCard,
  updateCustomerProfile,
} from "@/api/customer";

import {
  useAuth,
} from "@/hooks/useAuth";

import type {
  CustomerDashboardData,
  CustomerDashboardOrder,
  CustomerMembershipCardData,
  UpdateCustomerProfileData,
} from "@/types/Auth";

const EMPTY_PROFILE_FORM: UpdateCustomerProfileData = {
  name: "",
  email: "",
  phone: null,
  document_type: null,
  document_number: null,
  birth_date: null,
  marketing_opt_in: false,
};

export default function ProfilePage() {
  const {
    user,
    logout,
    refreshUser,
  } = useAuth();

  const navigate =
    useNavigate();

  const [
    dashboard,
    setDashboard,
  ] =
    useState<CustomerDashboardData | null>(
      null
    );

  const [
    dashboardLoading,
    setDashboardLoading,
  ] =
    useState(true);

  const [
    dashboardError,
    setDashboardError,
  ] =
    useState<string | null>(
      null
    );

  const [
    membershipCard,
    setMembershipCard,
  ] =
    useState<CustomerMembershipCardData | null>(
      null
    );

  const [
    profileForm,
    setProfileForm,
  ] =
    useState<UpdateCustomerProfileData>(
      EMPTY_PROFILE_FORM
    );

  const [
    isEditingProfile,
    setIsEditingProfile,
  ] = useState(false);

  const [
    isSavingProfile,
    setIsSavingProfile,
  ] = useState(false);

  const [
    profileError,
    setProfileError,
  ] =
    useState<string | null>(
      null
    );

  const [
    profileSuccess,
    setProfileSuccess,
  ] =
    useState<string | null>(
      null
    );

  const [
    profileFieldErrors,
    setProfileFieldErrors,
  ] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    let active = true;

    const loadDashboard =
      async (): Promise<void> => {
        try {
          setDashboardLoading(
            true
          );

          setDashboardError(
            null
          );

          const response =
            await getCustomerDashboard();

          if (!active) {
            return;
          }

          setDashboard(
            response.data
          );
        } catch (exception) {
          if (!active) {
            return;
          }

          setDashboardError(
            exception instanceof Error
              ? exception.message
              : "No fue posible cargar tus servicios."
          );
        } finally {
          if (active) {
            setDashboardLoading(
              false
            );
          }
        }
      };

    void loadDashboard();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    const loadMembershipCard =
      async (): Promise<void> => {
        try {
          const response =
            await getCustomerMembershipCard();

          if (!active) {
            return;
          }

          setMembershipCard(
            response.data
          );
        } catch {
          /*
           * Si este endpoint falla, el perfil
           * continúa funcionando con la información
           * de membresía que ya entrega /customer/me.
           */
        }
      };

    void loadMembershipCard();

    return () => {
      active = false;
    };
  }, []);

  if (!user) {
    return null;
  }

  const {
    user: account,
    profile,
    membership,
    vehicles,
  } = user;

  const firstName =
    account.name
      .trim()
      .split(/\s+/)[0];

  const points =
    membership?.current_points
    ?? account.current_points
    ?? 0;

  const membershipLevel =
    membership?.level
    ?? account.membership_level;

  const membershipName =
    membershipCard?.name
    ?? membershipLevel?.name
    ?? "Member";

  const membershipMultiplier =
    membershipCard?.points_multiplier
    ?? membershipLevel?.points_multiplier
    ?? 1;

  const membershipColor =
    membershipCard?.color
    ?? membershipLevel?.color
    ?? "#D4AF37";

  const membershipCardStyle = {
    "--membership-color":
      membershipColor,
  } as CSSProperties;

  const servicesCount =
    dashboard?.services_count
    ?? 0;

  const recentServices =
    dashboard?.recent_services
    ?? [];

  const upcomingServices =
    dashboard?.upcoming_services
    ?? [];

  const handleLogout =
    async (): Promise<void> => {
      await logout();

      navigate(
        "/",
        {
          replace: true,
        }
      );
    };

  const openProfileEditor =
    (): void => {
      setProfileForm({
        name:
          account.name,

        email:
          account.email,

        phone:
          account.phone
          ?? profile.phone
          ?? null,

        document_type:
          profile.document_type,

        document_number:
          profile.document_number,

        birth_date:
          profile.birth_date,

        marketing_opt_in:
          profile.marketing_opt_in,
      });

      setProfileError(null);
      setProfileSuccess(null);
      setProfileFieldErrors({});
      setIsEditingProfile(true);
    };

  const cancelProfileEditor =
    (): void => {
      setProfileForm({
        name:
          account.name,

        email:
          account.email,

        phone:
          account.phone
          ?? profile.phone
          ?? null,

        document_type:
          profile.document_type,

        document_number:
          profile.document_number,

        birth_date:
          profile.birth_date,

        marketing_opt_in:
          profile.marketing_opt_in,
      });

      setProfileError(null);
      setProfileFieldErrors({});
      setIsEditingProfile(false);
    };

  const handleProfileSubmit =
    async (
      event: React.FormEvent
    ): Promise<void> => {
      event.preventDefault();

      setProfileError(null);
      setProfileSuccess(null);
      setProfileFieldErrors({});
      setIsSavingProfile(true);

      try {
        const response =
          await updateCustomerProfile({
            name:
              profileForm.name.trim(),

            email:
              profileForm.email.trim(),

            phone:
              normalizeNullableText(
                profileForm.phone
              ),

            document_type:
              normalizeNullableText(
                profileForm.document_type
              ),

            document_number:
              normalizeNullableText(
                profileForm.document_number
              ),

            birth_date:
              normalizeNullableText(
                profileForm.birth_date
              ),

            marketing_opt_in:
              profileForm.marketing_opt_in,
          });

        await refreshUser();

        setProfileSuccess(
          response.message
        );

        setIsEditingProfile(
          false
        );
      } catch (exception) {
        if (
          exception
          instanceof ApiError
        ) {
          setProfileError(
            exception.message
          );

          setProfileFieldErrors(
            exception.errors
          );

          return;
        }

        setProfileError(
          exception
          instanceof Error
            ? exception.message
            : "No fue posible actualizar tu información."
        );
      } finally {
        setIsSavingProfile(
          false
        );
      }
    };

  return (
    <section className="profile-page">
      <div className="container">
        <section className="profile-hero">
          <div className="profile-hero-shade" />

          <div className="profile-hero-content">
            <div className="profile-hero-kicker">
              <Sparkles size={16} />

              <span>
                American Services Club
              </span>
            </div>

            <span
              className="profile-badge"
              style={{
                color:
                  membershipColor,
                borderColor:
                  `${membershipColor}45`,
              }}
            >
              {membershipName}
            </span>

            <h1>
              Hola, {firstName}
            </h1>

            <p>
              Todo lo relacionado con tu
              membresía, vehículos y servicios
              en un solo lugar.
            </p>

            <div className="profile-hero-points">
              <div>
                <span>
                  Puntos disponibles
                </span>

                <strong>
                  {points.toLocaleString(
                    "es-CO"
                  )}
                </strong>
              </div>

              <BadgeCheck
                size={34}
                strokeWidth={1.5}
              />
            </div>
          </div>

          <button
            type="button"
            className="profile-logout"
            onClick={() => {
              void handleLogout();
            }}
          >
            <LogOut size={17} />

            <span>
              Cerrar sesión
            </span>
          </button>
        </section>

        <section className="profile-stats">
          <div className="profile-stat-card">
            <div className="profile-stat-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <strong>
                {points.toLocaleString(
                  "es-CO"
                )}
              </strong>

              <span>
                Puntos disponibles
              </span>
            </div>
          </div>

          <div className="profile-stat-card">
            <div className="profile-stat-icon">
              <CarFront size={20} />
            </div>

            <div>
              <strong>
                {vehicles.length}
              </strong>

              <span>
                Vehículos registrados
              </span>
            </div>
          </div>

          <div className="profile-stat-card">
            <div className="profile-stat-icon">
              <History size={20} />
            </div>

            <div>
              <strong>
                {dashboardLoading
                  ? "—"
                  : servicesCount.toLocaleString(
                      "es-CO"
                    )}
              </strong>

              <span>
                Servicios realizados
              </span>
            </div>
          </div>
        </section>

        <section className="profile-membership-section">
          <div className="profile-membership-copy">
            <span className="profile-eyebrow">
              Tu membresía
            </span>

            <h2>
              Tu experiencia American Services,
              siempre contigo.
            </h2>

            <p>
              Consulta tu nivel, puntos y
              próximamente lleva tu membresía
              digital en tu teléfono.
            </p>

            <div className="profile-wallet-actions">
              <button
                type="button"
                className="profile-wallet-button"
                disabled
                title="Disponible próximamente"
              >
                <Smartphone size={20} />

                <span>
                  <small>
                    Agregar a
                  </small>

                  Apple Wallet
                </span>
              </button>

              <button
                type="button"
                className="profile-wallet-button"
                disabled
                title="Disponible próximamente"
              >
                <WalletCards size={20} />

                <span>
                  <small>
                    Agregar a
                  </small>

                  Google Wallet
                </span>
              </button>
            </div>

            <span className="profile-wallet-note">
              Integración disponible próximamente.
            </span>
          </div>

          <div
            className="profile-member-card"
            style={
              membershipCardStyle
            }
          >
            <div className="profile-member-card-glow" />

            <div className="profile-member-card-top">
              <span>
                AMERICAN SERVICES
              </span>

              <BadgeCheck size={25} />
            </div>

            <div className="profile-member-card-center">
              <span>
                {membershipName}
              </span>

              <strong>
                {points.toLocaleString(
                  "es-CO"
                )}
              </strong>

              <small>
                puntos disponibles
              </small>

              <div className="profile-member-multiplier">
                <Sparkles size={14} />

                <span>
                  x
                  {formatMultiplier(
                    membershipMultiplier
                  )}
                  {" "}
                  puntos por compras
                </span>
              </div>
            </div>

            <div className="profile-member-card-bottom">
              <div>
                <small>
                  Miembro
                </small>

                <strong>
                  {account.name}
                </strong>

                <span className="profile-member-level-name">
                  {membershipName}
                </span>
              </div>

              <div className="profile-member-card-id">
                <small>
                  ID
                </small>

                <strong>
                  {membership?.id
                    ? String(
                        membership.id
                      ).padStart(
                        6,
                        "0"
                      )
                    : "------"}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-dashboard-grid">
          <article className="profile-panel profile-personal-panel">
            <div className="profile-panel-header">
              <div className="profile-panel-title">
                <div className="profile-panel-icon">
                  <UserRound size={19} />
                </div>

                <div>
                  <span>
                    Cuenta
                  </span>

                  <h2>
                    Información personal
                  </h2>
                </div>
              </div>

              {!isEditingProfile && (
                <button
                  type="button"
                  className="profile-edit-button"
                  onClick={
                    openProfileEditor
                  }
                >
                  <Pencil size={15} />

                  Editar
                </button>
              )}
            </div>

            {profileSuccess && (
              <div className="profile-form-success">
                <Check size={17} />

                <span>
                  {profileSuccess}
                </span>
              </div>
            )}

            {isEditingProfile ? (
              <form
                className="profile-edit-form"
                onSubmit={
                  handleProfileSubmit
                }
              >
                <ProfileField
                  label="Nombre"
                  error={
                    firstFieldError(
                      profileFieldErrors,
                      "name"
                    )
                  }
                >
                  <input
                    type="text"
                    value={
                      profileForm.name
                    }
                    disabled={
                      isSavingProfile
                    }
                    onChange={(event) =>
                      setProfileForm(
                        (current) => ({
                          ...current,
                          name:
                            event.target.value,
                        })
                      )
                    }
                    required
                  />
                </ProfileField>

                <ProfileField
                  label="Correo"
                  error={
                    firstFieldError(
                      profileFieldErrors,
                      "email"
                    )
                  }
                >
                  <input
                    type="email"
                    value={
                      profileForm.email
                    }
                    disabled={
                      isSavingProfile
                    }
                    onChange={(event) =>
                      setProfileForm(
                        (current) => ({
                          ...current,
                          email:
                            event.target.value,
                        })
                      )
                    }
                    required
                  />
                </ProfileField>

                <ProfileField
                  label="Teléfono"
                  error={
                    firstFieldError(
                      profileFieldErrors,
                      "phone"
                    )
                  }
                >
                  <input
                    type="tel"
                    value={
                      profileForm.phone
                      ?? ""
                    }
                    disabled={
                      isSavingProfile
                    }
                    onChange={(event) =>
                      setProfileForm(
                        (current) => ({
                          ...current,
                          phone:
                            event.target.value,
                        })
                      )
                    }
                  />
                </ProfileField>

                <ProfileField
                  label="Tipo de documento"
                  error={
                    firstFieldError(
                      profileFieldErrors,
                      "document_type"
                    )
                  }
                >
                  <select
                    value={
                      profileForm.document_type
                      ?? ""
                    }
                    disabled={
                      isSavingProfile
                    }
                    onChange={(event) =>
                      setProfileForm(
                        (current) => ({
                          ...current,
                          document_type:
                            event.target.value
                            || null,
                        })
                      )
                    }
                  >
                    <option value="">
                      Sin definir
                    </option>

                    <option value="CC">
                      Cédula de ciudadanía
                    </option>

                    <option value="CE">
                      Cédula de extranjería
                    </option>

                    <option value="PASSPORT">
                      Pasaporte
                    </option>

                    <option value="NIT">
                      NIT
                    </option>

                    <option value="OTHER">
                      Otro
                    </option>
                  </select>
                </ProfileField>

                <ProfileField
                  label="Número de documento"
                  error={
                    firstFieldError(
                      profileFieldErrors,
                      "document_number"
                    )
                  }
                >
                  <input
                    type="text"
                    value={
                      profileForm.document_number
                      ?? ""
                    }
                    disabled={
                      isSavingProfile
                    }
                    onChange={(event) =>
                      setProfileForm(
                        (current) => ({
                          ...current,
                          document_number:
                            event.target.value,
                        })
                      )
                    }
                  />
                </ProfileField>

                <ProfileField
                  label="Fecha de nacimiento"
                  error={
                    firstFieldError(
                      profileFieldErrors,
                      "birth_date"
                    )
                  }
                >
                  <input
                    type="date"
                    value={
                      profileForm.birth_date
                      ?? ""
                    }
                    max={
                      new Date()
                        .toISOString()
                        .slice(
                          0,
                          10
                        )
                    }
                    disabled={
                      isSavingProfile
                    }
                    onChange={(event) =>
                      setProfileForm(
                        (current) => ({
                          ...current,
                          birth_date:
                            event.target.value
                            || null,
                        })
                      )
                    }
                  />
                </ProfileField>

                <label className="profile-marketing-option">
                  <input
                    type="checkbox"
                    checked={
                      profileForm.marketing_opt_in
                    }
                    disabled={
                      isSavingProfile
                    }
                    onChange={(event) =>
                      setProfileForm(
                        (current) => ({
                          ...current,
                          marketing_opt_in:
                            event.target.checked,
                        })
                      )
                    }
                  />

                  <span>
                    Acepto recibir comunicaciones
                    comerciales y beneficios.
                  </span>
                </label>

                {profileError && (
                  <div
                    role="alert"
                    className="profile-form-error"
                  >
                    {profileError}
                  </div>
                )}

                <div className="profile-edit-actions">
                  <button
                    type="button"
                    className="profile-edit-cancel"
                    disabled={
                      isSavingProfile
                    }
                    onClick={
                      cancelProfileEditor
                    }
                  >
                    <X size={16} />

                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="profile-edit-save"
                    disabled={
                      isSavingProfile
                    }
                  >
                    <Save size={16} />

                    {isSavingProfile
                      ? "Guardando..."
                      : "Guardar cambios"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="profile-info-grid">
                <ProfileInfo
                  label="Nombre"
                  value={
                    account.name
                  }
                />

                <ProfileInfo
                  label="Correo"
                  value={
                    account.email
                  }
                />

                <ProfileInfo
                  label="Teléfono"
                  value={
                    account.phone
                    ?? profile.phone
                    ?? "Sin registrar"
                  }
                />

                <ProfileInfo
                  label="Documento"
                  value={
                    profile.document_number
                      ? [
                          profile.document_type,
                          profile.document_number,
                        ]
                          .filter(Boolean)
                          .join(" ")
                      : "Sin registrar"
                  }
                />

                <ProfileInfo
                  label="Fecha de nacimiento"
                  value={
                    profile.birth_date
                      ? formatDate(
                          profile.birth_date
                        )
                      : "Sin registrar"
                  }
                />

                <ProfileInfo
                  label="Nivel"
                  value={
                    membershipName
                  }
                />

                <ProfileInfo
                  label="Puntos históricos"
                  value={(
                    membership
                      ?.lifetime_points
                    ?? 0
                  ).toLocaleString(
                    "es-CO"
                  )}
                />
              </div>
            )}
          </article>

          <article className="profile-panel">
            <div className="profile-panel-header">
              <div className="profile-panel-title">
                <div className="profile-panel-icon">
                  <CarFront size={19} />
                </div>

                <div>
                  <span>
                    Garaje
                  </span>

                  <h2>
                    Mis vehículos
                  </h2>
                </div>
              </div>

              <span className="profile-count">
                {vehicles.length}
              </span>
            </div>

            {vehicles.length === 0 ? (
              <EmptyState
                icon={
                  <CarFront size={26} />
                }
                text="No tienes vehículos registrados."
              />
            ) : (
              <div className="profile-vehicle-list">
                {vehicles.map(
                  (vehicle) => (
                    <div
                      key={vehicle.id}
                      className="profile-vehicle-item"
                    >
                      <div className="profile-vehicle-icon">
                        <CarFront size={21} />
                      </div>

                      <div className="profile-vehicle-copy">
                        <strong>
                          {vehicle.plate}
                        </strong>

                        <span>
                          {formatVehicleType(
                            vehicle.vehicle_type
                          )}
                        </span>
                      </div>

                      <ChevronRight
                        className="profile-item-arrow"
                        size={18}
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </article>

          <article className="profile-panel">
            <div className="profile-panel-header">
              <div className="profile-panel-title">
                <div className="profile-panel-icon">
                  <CalendarDays size={19} />
                </div>

                <div>
                  <span>
                    Agenda
                  </span>

                  <h2>
                    Próximos servicios
                  </h2>
                </div>
              </div>
            </div>

            {dashboardLoading ? (
              <EmptyState
                icon={
                  <Clock3 size={26} />
                }
                text="Cargando servicios..."
              />
            ) : dashboardError ? (
              <EmptyState
                icon={
                  <CalendarDays size={26} />
                }
                text={
                  dashboardError
                }
              />
            ) : upcomingServices.length === 0 ? (
              <EmptyState
                icon={
                  <CalendarDays size={26} />
                }
                text="No tienes servicios próximos agendados."
              />
            ) : (
              <div className="profile-upcoming-list">
                {upcomingServices.map(
                  (order) => (
                    <ServiceOrderItem
                      key={order.id}
                      order={order}
                      dateType="scheduled"
                      compact
                    />
                  )
                )}
              </div>
            )}
          </article>
        </section>

        <section className="profile-history">
          <div className="profile-history-heading">
            <div>
              <span className="profile-eyebrow">
                Tu actividad
              </span>

              <h2>
                Últimos servicios
              </h2>

              <p>
                Consulta tus atenciones más
                recientes en American Services.
              </p>
            </div>

            {!dashboardLoading && (
              <span className="profile-history-total">
                {servicesCount.toLocaleString(
                  "es-CO"
                )}
                {" "}
                en total
              </span>
            )}
          </div>

          {dashboardLoading ? (
            <EmptyState
              icon={
                <History size={28} />
              }
              text="Cargando historial..."
            />
          ) : dashboardError ? (
            <EmptyState
              icon={
                <History size={28} />
              }
              text={
                dashboardError
              }
            />
          ) : recentServices.length === 0 ? (
            <EmptyState
              icon={
                <History size={28} />
              }
              text="Todavía no tienes servicios realizados."
            />
          ) : (
            <div className="profile-history-list">
              {recentServices.map(
                (order) => (
                  <ServiceOrderItem
                    key={order.id}
                    order={order}
                    dateType="completed"
                    showTotal
                  />
                )
              )}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

interface ProfileInfoProps {
  label: string;

  value: string;
}

function ProfileInfo({
  label,
  value,
}: ProfileInfoProps) {
  return (
    <div className="profile-info-item">
      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>
    </div>
  );
}

interface ProfileFieldProps {
  label: string;

  error?: string;

  children: React.ReactNode;
}

function ProfileField({
  label,
  error,
  children,
}: ProfileFieldProps) {
  return (
    <label className="profile-edit-field">
      <span>
        {label}
      </span>

      {children}

      {error && (
        <small>
          {error}
        </small>
      )}
    </label>
  );
}

interface EmptyStateProps {
  icon: React.ReactNode;

  text: string;
}

function EmptyState({
  icon,
  text,
}: EmptyStateProps) {
  return (
    <div className="profile-empty-state">
      <div className="profile-empty-icon">
        {icon}
      </div>

      <p>
        {text}
      </p>
    </div>
  );
}

interface ServiceOrderItemProps {
  order: CustomerDashboardOrder;

  dateType:
    | "completed"
    | "scheduled";

  showTotal?: boolean;

  compact?: boolean;
}

function ServiceOrderItem({
  order,
  dateType,
  showTotal = false,
  compact = false,
}: ServiceOrderItemProps) {
  const date =
    dateType === "completed"
      ? order.completed_at
      : order.scheduled_at;

  return (
    <article
      className={
        compact
          ? "profile-service-item profile-service-item-compact"
          : "profile-service-item"
      }
    >
      <div className="profile-service-marker">
        <CarFront size={18} />
      </div>

      <div className="profile-service-main">
        <div className="profile-service-top">
          <div>
            <span className="profile-service-order">
              {order.order_number}
            </span>

            <h3>
              {serviceNames(
                order
              )}
            </h3>
          </div>

          <span
            className={
              `profile-status profile-status-${order.status}`
            }
          >
            {order.status_label}
          </span>
        </div>

        <div className="profile-service-meta">
          <span>
            <CarFront size={15} />

            {order.vehicle
              ? `${order.vehicle.plate} · ${formatVehicleType(
                  order.vehicle.vehicle_type
                )}`
              : "Vehículo no registrado"}
          </span>

          {date && (
            <span>
              <Clock3 size={15} />

              {formatDateTime(
                date
              )}
            </span>
          )}

          {showTotal && (
            <strong>
              {formatCop(
                order.total
              )}
            </strong>
          )}
        </div>
      </div>
    </article>
  );
}

function serviceNames(
  order: CustomerDashboardOrder
): string {
  if (
    order.services.length === 0
  ) {
    return "Servicio";
  }

  return order.services
    .map((service) =>
      service.quantity > 1
        ? `${service.name} × ${formatQuantity(
            service.quantity
          )}`
        : service.name
    )
    .join(" · ");
}

function formatQuantity(
  value: number
): string {
  return value.toLocaleString(
    "es-CO",
    {
      maximumFractionDigits: 3,
    }
  );
}

function formatVehicleType(
  value: string | null
): string {
  if (!value) {
    return "Vehículo";
  }

  const labels: Record<
    string,
    string
  > = {
    car: "Carro",
    motorcycle: "Motocicleta",
    suv: "Camioneta",
    truck: "Camión",
    van: "Van",
  };

  return labels[value]
    ?? value;
}

function formatCop(
  value: number
): string {
  return new Intl.NumberFormat(
    "es-CO",
    {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }
  ).format(
    value
  );
}

function formatDateTime(
  value: string
): string {
  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "";
  }

  const formattedDate =
    new Intl.DateTimeFormat(
      "es-CO",
      {
        timeZone:
          "America/Bogota",

        day:
          "2-digit",

        month:
          "2-digit",

        year:
          "numeric",
      }
    ).format(
      date
    );

  const formattedTime =
    new Intl.DateTimeFormat(
      "es-CO",
      {
        timeZone:
          "America/Bogota",

        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,
      }
    ).format(
      date
    );

  return `${formattedDate} · ${formattedTime}`;
}

function formatDate(
  value: string
): string {
  const parts =
    value.split("-");

  if (
    parts.length !== 3
  ) {
    return value;
  }

  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function formatMultiplier(
  value: number
): string {
  return value.toLocaleString(
    "es-CO",
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  );
}

function normalizeNullableText(
  value: string | null
): string | null {
  if (value === null) {
    return null;
  }

  const normalized =
    value.trim();

  return normalized !== ""
    ? normalized
    : null;
}

function firstFieldError(
  errors: Record<
    string,
    string[]
  >,
  field: string
): string | undefined {
  return errors[field]?.[0];
}