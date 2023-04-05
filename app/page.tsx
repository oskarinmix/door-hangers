import FormSurvey from "@/components/FormSurvey";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-700 text-white">
      {/*@ts-ignore  */}
      <Container>
        <FormSurvey />
      </Container>
    </div>
  );
}

const Container = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => (
  <div className={`w-full max-w-screen-xl mx-auto ${className}`}>
    {children}
  </div>
);
