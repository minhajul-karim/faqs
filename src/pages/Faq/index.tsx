import AppFooter from "../../components/footer";
import TopNavigation from "../../components/topnav";
import ContactUs from "./components/contactUs";
import FaqCategories from "./components/faqCategories";
import FaqAnswers from "./components/faqAnswers";
import FaqHeader from "./components/faqHeader";

export default function Faqs() {
  return (
    <>
      <TopNavigation />
      <FaqHeader />
      {/* <FaqCategories /> */}
      <FaqAnswers />
      <ContactUs />
      <AppFooter />
    </>
  );
}
