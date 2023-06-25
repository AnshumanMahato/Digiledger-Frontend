import AccountForm from "../components/formComponents/AccountForm";
import ConfigurationForm from "../components/formComponents/ConfigurationForm";
import ProfileForm from "../components/formComponents/ProfileForm";
import Section from "../components/utils/Section";
import SectionHeader from "../components/utils/SectionHeader";

function Settings() {
  return (
    <main className="flex flex-col items-center w-full flex-grow">
      <Section>
        <SectionHeader>Profile</SectionHeader>
        <ProfileForm />
      </Section>
      <Section>
        <SectionHeader>Preferences</SectionHeader>
        <ConfigurationForm />
      </Section>
      <Section>
        <SectionHeader>Account</SectionHeader>
        <AccountForm />
      </Section>
    </main>
  );
}

export default Settings;
