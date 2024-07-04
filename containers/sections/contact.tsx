import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import ContactForm from "@/components/sections/contact/form";
import Info from "@/components/sections/contact/info";

export default function Contact() {
  return (
    <Section name="Contact">
      <SectionHeading>Contact</SectionHeading>
      <SectionSubTitle>Get in touch</SectionSubTitle>
      <SectionContent className="flex gap-5 flex-col md:flex-row justify-between">
        <Info />
        <ContactForm />
      </SectionContent>
    </Section>
  );
}
