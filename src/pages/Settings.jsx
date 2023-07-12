import classNames from "classnames";
import AccountForm from "../components/forms/AccountForm";
import ConfigurationForm from "../components/forms/ConfigurationForm";
import ProfileForm from "../components/forms/ProfileForm";
import Section from "../components/layouts/Section";
import SectionHeader from "../components/utils/SectionHeader";
import useUtilityContext from "../hooks/useUtilityContext";
import Modal from "../components/layouts/Modal";
import Loading from "../components/utils/Loading";

function Settings() {
  const { isProcessing } = useUtilityContext();

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
        <SectionHeader>Password</SectionHeader>
        <AccountForm />
      </Section>
      {isProcessing && (
        <Modal>
          <Loading />
        </Modal>
      )}
    </main>
  );
}

export default Settings;
