import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center flex-1 bg-gray-100 px-4">
        <h1 className="text-3xl font-bold mb-8">Iniciar Sesión</h1>
        <LoginForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}