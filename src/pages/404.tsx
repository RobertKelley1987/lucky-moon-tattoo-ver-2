import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import SiteLayout from "../components/SiteLayout";
import PageTitle from "../components/PageTitle";
import type { HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Helmet>
        <title>Lucky Moon Tattoo | Page Not Found</title>
        <html lang="en" />
        <meta
          name="description"
          content="404 page for Lucky Moon Tattoo. The page you tried to locate could not be found."
        />
        <meta
          name="image"
          content="https://luckymoontattoo.com/images/owl-tattoo.png"
        />
        <meta
          name="image:alt"
          content="404 page for Lucky Moon Tattoo. The page you tried to locate could not be found."
        />
      </Helmet>
      <SiteLayout>
        <main className="main justify-center zero-margin">
          <div className="notfound-wrapper">
            <div className="heading-wrapper">
              <span>Womp womp.</span>
              <PageTitle>404.</PageTitle>
            </div>
            <p className="notfound-text">
              The page you are looking for could not be found.
            </p>
            <Link to="/" className="button">
              Return home
            </Link>
          </div>
        </main>
      </SiteLayout>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 Error</title>;
