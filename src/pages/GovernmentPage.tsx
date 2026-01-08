import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, CheckCircle, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Opportunity Identification",
    description: "Identify and evaluate contract opportunities aligned with your capabilities.",
    path: "/government/opportunity",
  },
  {
    icon: FileText,
    title: "Proposal Development",
    description: "Develop compliant, competitive proposals that win.",
    path: "/government/proposal",
  },
  {
    icon: Users,
    title: "Teaming & Partnerships",
    description: "Build effective prime-subcontractor relationships.",
    path: "/government/teaming",
  },
  {
    icon: CheckCircle,
    title: "Post-Award Support",
    description: "Ensure successful contract execution from day one.",
    path: "/government/post-award",
  },
];

export default function GovernmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Government Contract Support
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Strategic guidance for organizations pursuing federal, state, and local healthcare contracts.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Capabilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              End-to-end support for your government contracting journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((capability) => (
              <Link
                key={capability.path}
                to={capability.path}
                className="card-hover group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card lg:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <capability.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 flex-1 text-muted-foreground">{capability.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Pursue Government Opportunities?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Let us help you develop a strategic approach to government contracting.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Goals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
