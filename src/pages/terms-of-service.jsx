import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout";
import GlobalStyles from "assets/styles/GlobalStyles"
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/ContactPage/PageHeader";
import Footer from "sections/Footer/v1";

export default function TermsOfService() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="Terms of Service" pageTitle="Terms of Service" />
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <br></br>
                  <p>
                  Welcome to www.metaarcadeclub.com (the "Website"). The Website is owned and operated by Meta Arcade Club ("we," "us," or "our"). Please read these Terms of Service ("Terms") carefully before using our Website or any services provided through the Website ("Services").
                  </p>
                  <p>
                  By accessing or using our Website or Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Website or Services.
                  </p>
                  <h4>Eligibility</h4>
                  <p>
                  To use our Website and Services, you must be at least 18 years old or have the consent of a parent or guardian. By using our Website or Services, you represent and warrant that you meet this requirement.
                  </p>
                  
                  <h4>Intellectual Property</h4>
                  All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of Meta Arcade Club or its content suppliers and protected by copyright and other intellectual property laws. Unauthorized use of any content is strictly prohibited.
                  <br></br>
                  <h4>User Conduct</h4>
                  By using our Website and Services, you agree not to:

                  Engage in any unlawful, abusive, or fraudulent activity.
                  Use our Website or Services for any purpose other than as expressly permitted by these Terms.
                  Attempt to access or use another user's account or personal information without authorization.
                  Post, transmit, or share any content that is obscene, offensive, or otherwise inappropriate.
                  Disrupt, interfere with, or compromise the security or performance of our Website or Services.
                  NFTs and Digital Assets
                  Our Services may involve the creation, trading, or management of non-fungible tokens (NFTs) and other digital assets. You acknowledge and agree that you are solely responsible for understanding the risks associated with NFTs and digital assets, and that Meta Arcade Club is not liable for any losses or damages resulting from your use of or involvement with NFTs or digital assets.
                  <br></br>
                  <h4>Account Registration</h4>
                  To access certain features of our Website and Services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and password, and for all activities that occur under your account.
                  <br></br>
                  <h4>Limitation of Liability</h4>
                  In no event shall Meta Arcade Club, its affiliates, or their respective directors, officers, employees, or agents be liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with your use of or inability to use our Website or Services, even if advised of the possibility of such damages.
                  <br></br>
                  <h4>Indemnification</h4>
                  You agree to indemnify, defend, and hold harmless Meta Arcade Club, its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of our Website or Services.
                  <br></br>
                  <h4>Changes to Terms</h4>
                  We reserve the right to modify these Terms at any time. Any changes will be effective when posted on the Website, and your continued use of our Website or Services after any such changes are posted constitutes your acceptance of the revised Terms.
                  <br></br>
                  <h4>Governing Law and Jurisdiction</h4>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Meta Arcade Club is incorporated, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in the same jurisdiction.
                  <br></br>
                  <h4>Termination</h4>
                  We reserve the right, in our sole discretion, to terminate or suspend your access to our Website and Services at any time, without notice, for any reason, including but not limited to violation of these Terms.
                  <br></br>
                  <h4>Severability</h4>
                  If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, that provision shall be deemed severable, and the remainder of these Terms shall remain in full force and effect.
                  <br></br>
                  <h4>No Waiver</h4>
                  Our failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                  <br></br>
                  <h4>Privacy</h4>
                  Your use of our Website and Services is subject to our Privacy Policy, which can be found at [insert link to Privacy Policy]. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
                  <br></br>
                  <h4>Third-Party Links and Services</h4>
                  Our Website or Services may contain links to third-party websites, resources, or services. We do not endorse and are not responsible for the content, privacy practices, or accuracy of any third-party websites, resources, or services. You acknowledge and agree that we shall not be liable for any loss or damage resulting from your use of or reliance on any third-party websites, resources, or services.
                  <br></br>
                  <h4>Contact Information</h4>
                  If you have any questions or concerns about these Terms, please contact us at contact@metaarcadeclub.com.
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
