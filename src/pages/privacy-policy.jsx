import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout";
import GlobalStyles from "assets/styles/GlobalStyles"
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/ContactPage/PageHeader";
import Footer from "sections/Footer/v1";

export default function PrivacyPolicy() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="Privacy Policy" pageTitle="Privacy Policy" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <br></br>
                  <p>
                  Meta Arcade Club ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, www.metaarcadeclub.com (the "Website"), and use our services (the "Services").
                  </p>
                  <br></br>
                  <p>
                  By using our Website and Services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Website or Services.
                  </p>
                  <h4>Information We Collect</h4>
                  We may collect personal information from you in various ways, including:
                  <br></br>
                  Information you provide: When you register an account, participate in our community, or interact with us, we may collect information such as your name, email address, and other contact information.
                  Information from your use of our Services: We may collect information about your use of our Services, such as your IP address, browser type, device information, and browsing activity on our Website.
                  Information from third parties: We may receive information about you from third-party sources, such as social media platforms or analytics providers.
                  <br></br>
                  <h4>How We Use Your Information</h4>
                  We may use the information we collect for various purposes, including to:

                  Provide and maintain our Services.
                  Improve, personalize, and expand our Services.
                  Understand and analyze how you use our Services.
                  Communicate with you, including for marketing and promotional purposes.
                  Enforce our Terms of Service and protect our rights and the rights of others.
                  Comply with legal obligations and applicable laws.
                  How We Share Your Information
                  We may share your information with third parties in certain circumstances, such as:

                  With service providers who help us operate and maintain our Services.
                  With other users of our Services, to the extent that you choose to make your information publicly visible or share it with others.
                  In connection with a merger, acquisition, or sale of our assets, in which case your information may be transferred to a new owner.
                  To comply with legal obligations, protect our rights, or enforce our Terms of Service.
                  How We Protect Your Information
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee the absolute security of your information.
                  <br></br>
                  <h4>Your Choices and Rights</h4>
                  You may have certain rights with respect to your personal information, such as the right to access, correct, or delete your information, or to object to or restrict our processing of your information. To exercise these rights, please contact us at contact@metaarcadeclub.com.
                  <br></br>
                  <h4>Third-Party Links</h4>
                  Our Website and Services may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of these third-party websites or services. Please review the privacy policies of any third-party websites or services you visit.
                  <br></br>
                  <h4>Changes to This Privacy Policy</h4>
                  We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective when posted on the Website, and your continued use of our Website or Services after any such changes are posted constitutes your acceptance of the revised Privacy Policy.
                  <br></br>
                  <h4>Contact Us</h4>
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at contact@metaarcadeclub.com.
                  <br></br>
                  <br></br>
              </div>
            </div>
          </div>          
        <Footer />
      </Layout>
    </Fragment>
  );
}
