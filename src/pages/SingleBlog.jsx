 import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SingleBlog() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs/${slug}`
      );

      setBlog(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Blog Not Found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>

        <meta
          name="description"
          content={
            blog.metaDescription ||
            blog.excerpt
          }
        />
      </Helmet>

      <section className="bg-[#fff] text-[#234C6A]">

        <div className="container mx-auto px-6 py-12 pt-32">

          <div className="max-w-5xl mx-auto">

            {/* Title */}

            <h1 className="text-center text-[42px] md:text-[56px] leading-tight fontplayfair text-[#1B3C53] mb-10">

              {blog.title}

            </h1>

            {/* Banner */}

            {blog.bannerImage && (

              <div className="mb-10">

                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/blogs/${blog.bannerImage}`}
                  alt={blog.title}
                  className="w-full rounded-2xl shadow-xl"
                />

              </div>

            )}

            {/* Intro */}

            <p className="text-xl leading-relaxed">

              {blog.intro?.paragraph1}

            </p>

            <p className="mt-6 leading-relaxed">

              {blog.intro?.paragraph2}

            </p>
                        {/* ================= TABLE OF CONTENTS ================= */}

            {blog.tableOfContents?.length > 0 && (

              <div className="bg-[#1B3C53] text-white rounded-3xl p-10 my-14">

                <h2 className="text-3xl font-bold mb-8">
                  Table of Contents
                </h2>

                <ul className="space-y-4 list-disc list-inside">

                  {blog.tableOfContents.map((item, index) => (

                    <li
                      key={index}
                      className="text-lg"
                    >
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            )}

            {/* ================= BLOG SECTIONS ================= */}

            {blog.sections?.map((section) => (

              <div
                key={section.number}
                className="mb-20"
              >

                {/* Number */}

                <div className="text-[#1B3C53] text-[70px] font-black opacity-20 mb-3">

                  {section.number}

                </div>

                {/* Heading */}

                <h2 className="fontplayfair text-[38px] leading-tight text-[#1B3C53] mb-6">

                  {section.title}

                </h2>

                {/* Paragraph */}

                <p className="leading-9 text-lg mb-6">

                  {section.paragraph1}

                </p>

                {/* Paragraph */}

                <p className="leading-9 text-lg mb-10">

                  {section.paragraph2}

                </p>

                {/* Blue Box */}

                <div className="bg-[#1B3C53] text-white rounded-3xl p-10">

                  <h3 className="text-3xl font-bold mb-8">

                    {section.boxTitle}

                  </h3>

                  <ul className="space-y-5">

                    {section.bullets?.map(
                      (bullet, index) => (

                        <li
                          key={index}
                          className="flex gap-4 items-start"
                        >

                          <span className="text-2xl">
                            ✓
                          </span>

                          <span className="text-lg leading-8">

                            {bullet}

                          </span>

                        </li>

                      )
                    )}

                  </ul>

                </div>

              </div>

            ))}
                        {/* ================= CTA ================= */}

            {blog.cta && (

              <div className="bg-[#1B3C53] text-white rounded-[35px] p-10 md:p-16 mt-20">

                <h2 className="fontplayfair text-4xl md:text-5xl mb-6 leading-tight">

                  {blog.cta.title}

                </h2>

                <p className="text-lg leading-9 opacity-90 max-w-3xl">

                  {blog.cta.description}

                </p>

                {blog.cta.buttonText && (

                  <a
                    href={blog.cta.buttonLink}
                    className="inline-flex mt-10 px-8 py-4 bg-white text-[#1B3C53] rounded-full font-semibold hover:scale-105 transition"
                  >
                    {blog.cta.buttonText}
                  </a>

                )}

              </div>

            )}

            {/* ================= DATE ================= */}

            <div className="mt-12 text-gray-600 text-sm">

              Published on{" "}
              {new Date(blog.createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}

            </div>

            {/* ================= BACK BUTTON ================= */}

            <div className="mt-16 text-center">

              <Link
                to="/blogs"
                className="inline-flex items-center gap-3 bg-[#1B3C53] text-white px-8 py-4 rounded-full hover:bg-[#163247] transition"
              >
                ← Back to Blogs
              </Link>

            </div>

          </div>

        </div>

      </section>

    </>
  );

}