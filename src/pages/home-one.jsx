import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles"
import Layout from "components/layout";
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Banner from "sections/Banner/v1";
import Header from "sections/Header/v1";
import About from "sections/About/v1";
import NextProjects from "sections/Projects/v1";
import Team from "sections/Team/v1";
// import Partner from "sections/Partner/v1";
import Footer from "sections/Footer/v1";
import RoadMapDetails from "sections/RoadMapDetails";


export default function HomeOne() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <Banner />
        <About />
        <NextProjects />
        <RoadMapDetails />
        <Team />
        {/* <Partner /> */}
        <Footer />
      </Layout>
    </Fragment>
  );
}
