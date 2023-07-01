import classNames from "classnames";
import AccountForm from "../components/formComponents/AccountForm";
import ConfigurationForm from "../components/formComponents/ConfigurationForm";
import ProfileForm from "../components/formComponents/ProfileForm";
import Section from "../components/utils/Section";
import SectionHeader from "../components/utils/SectionHeader";

function Settings() {
  const sectionClasses = classNames(
    "flex flex-col items-center justify-between"
  );

  return (
    <main className="flex flex-col items-center w-full flex-grow">
      <Section className={sectionClasses}>
        <SectionHeader>Profile</SectionHeader>
        <ProfileForm />
      </Section>
      <Section className={sectionClasses}>
        <SectionHeader>Preferences</SectionHeader>
        <ConfigurationForm />
      </Section>
      <Section className={sectionClasses}>
        <SectionHeader>Account</SectionHeader>
        <AccountForm />
      </Section>
    </main>
  );
}

export default Settings;
