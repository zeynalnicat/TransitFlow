import Truck from "../../assets/banner/Photo.svg";
import BlogCardSection from "../../components/BlogCardSection";
import PageContainer from "../../components/PageContainer";
const BlogPage = () => {
  return (
    <>
      <PageContainer
        bannerSubtitle="Blog"
        bannerTitle="Our Latest News"
        bannerImage={Truck}>
        <BlogCardSection />
      </PageContainer>

    </>
  );
};

export default BlogPage;
