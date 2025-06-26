import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Nx Shadcn Registry
          </h1>
          <p className="text-xl md:text-2xl text-fd-muted-foreground mb-8 leading-relaxed">
            A modern component registry built with <strong>Nx</strong>,{' '}
            <strong>Shadcn/ui</strong>, and <strong>React Hook Form</strong>.
            Reusable, accessible, and fully typed form controls for your
            applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/your-username/nx-shad-registry"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Nx Shadcn Registry?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Form Validation</h3>
              <p className="text-fd-muted-foreground">
                Built-in integration with React Hook Form for seamless
                validation and error handling.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-fd-muted-foreground">
                Optimized with Nx monorepo architecture for fast builds and
                efficient development.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-fd-muted-foreground">
                WCAG compliant components with proper ARIA attributes and
                keyboard navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Available Components
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Input Control
                </h3>
                <p className="text-gray-600 mb-4">
                  A controlled input field component with built-in validation
                  and error handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Validated
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                    Accessible
                  </span>
                </div>
                <Link
                  href="/docs"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Number Input Control
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized numeric input with min/max constraints and step
                  controls.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                    Numeric
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                    Accessible
                  </span>
                </div>
                <Link
                  href="/docs"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Select Control
                </h3>
                <p className="text-gray-600 mb-4">
                  Dropdown select component with customizable options and
                  validation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">
                    Dropdown
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                    Accessible
                  </span>
                </div>
                <Link
                  href="/docs"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Built with Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">Nx</div>
              <div className="text-sm text-fd-muted-foreground">Monorepo</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">React</div>
              <div className="text-sm text-fd-muted-foreground">UI Library</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">Shadcn/ui</div>
              <div className="text-sm text-fd-muted-foreground">Components</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">TypeScript</div>
              <div className="text-sm text-fd-muted-foreground">
                Type Safety
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">Tailwind</div>
              <div className="text-sm text-fd-muted-foreground">Styling</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Explore our comprehensive documentation and start building with
              our component registry today.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
