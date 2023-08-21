import DarkLayout from "./components/layouts/DarkLayout";
import MainLayout from "./components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h2>About Page</h2>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
