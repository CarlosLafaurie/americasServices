import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import logo from "@/assets/logo/logoN.png";

import {
  ApiError,
} from "@/api/client";

import {
  useAuth,
} from "@/hooks/useAuth";

export default function RegisterPage() {
  const {
    register,
  } = useAuth();

  const navigate =
    useNavigate();

  const [
    name,
    setName,
  ] = useState("");

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    phone,
    setPhone,
  ] = useState("");

  const [
    documentNumber,
    setDocumentNumber,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    passwordConfirmation,
    setPasswordConfirmation,
  ] = useState("");

  const [
    error,
    setError,
  ] =
    useState<string | null>(
      null
    );

  const [
    validationErrors,
    setValidationErrors,
  ] = useState<string[]>([]);

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  const handleSubmit =
    async (
      event: React.FormEvent
    ): Promise<void> => {
      event.preventDefault();

      setError(null);
      setValidationErrors([]);

      if (
        documentNumber.trim() === ""
      ) {
        setError(
          "Debes ingresar el número de documento."
        );

        return;
      }

      setIsSubmitting(true);

      try {
        await register({
          name:
            name.trim(),

          email:
            email.trim(),

          phone:
            phone.trim() !== ""
              ? phone.trim()
              : null,

          document_type:
            "CC",

          document_number:
            documentNumber.trim(),

          password,

          password_confirmation:
            passwordConfirmation,
        });

        navigate(
          "/profile",
          {
            replace: true,
          }
        );
      } catch (exception) {
        if (
          exception
          instanceof ApiError
        ) {
          const fieldErrors =
            Object.values(
              exception.errors
            ).flat();

          setValidationErrors(
            fieldErrors
          );

          setError(
            exception.message
          );

          return;
        }

        setError(
          exception
          instanceof Error
            ? exception.message
            : "No fue posible crear la cuenta."
        );
      } finally {
        setIsSubmitting(
          false
        );
      }
    };

  return (
    <section className="register-page">
      <div className="register-overlay" />

      <div className="register-card">
        <Link
          to="/"
          className="auth-back-button"
        >
          ← Inicio
        </Link>

        <Link
          to="/"
          className="register-logo-link"
        >
          <img
            src={logo}
            alt="American Services"
            className="register-logo"
          />
        </Link>

        <h1>
          Crear Cuenta
        </h1>

        <p>
          Regístrate y comienza a
          acumular puntos y beneficios
          en American Services.
        </p>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <div className="register-grid">
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              autoComplete="name"
              disabled={isSubmitting}
              onChange={(event) =>
                setName(
                  event.target.value
                )
              }
              required
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              autoComplete="email"
              disabled={isSubmitting}
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
              required
            />

            <input
              type="tel"
              placeholder="Teléfono (opcional)"
              value={phone}
              autoComplete="tel"
              disabled={isSubmitting}
              onChange={(event) =>
                setPhone(
                  event.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Número de cédula"
              value={documentNumber}
              inputMode="numeric"
              autoComplete="off"
              disabled={isSubmitting}
              onChange={(event) =>
                setDocumentNumber(
                  event.target.value
                )
              }
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              autoComplete="new-password"
              minLength={8}
              disabled={isSubmitting}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              required
            />

            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={
                passwordConfirmation
              }
              autoComplete="new-password"
              minLength={8}
              disabled={isSubmitting}
              onChange={(event) =>
                setPasswordConfirmation(
                  event.target.value
                )
              }
              required
            />
          </div>

          {error && (
            <div
              role="alert"
              className="login-error"
            >
              <strong>
                {error}
              </strong>

              {validationErrors.length > 0 && (
                <ul>
                  {validationErrors.map(
                    (
                      validationError,
                      index
                    ) => (
                      <li
                        key={`${validationError}-${index}`}
                      >
                        {validationError}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Creando cuenta..."
              : "Crear Cuenta"}
          </button>
        </form>

        <div className="login-divider">
          <span>
            o
          </span>
        </div>

        <Link
          to="/login"
          className="btn-secondary register-login"
        >
          Ya tengo una cuenta
        </Link>
      </div>
    </section>
  );
}