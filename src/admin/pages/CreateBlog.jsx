import { useState } from "react";
import axios from "axios";

export default function CreateBlog() {
  const [loading, setLoading] = useState(false);

  const [featuredImage, setFeaturedImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "",

    metaTitle: "",
    metaDescription: "",

    status: "draft",

    intro: {
      paragraph1: "",
      paragraph2: "",
    },

    tableOfContents: ["", "", "", "", ""],

    sections: [
      {
        number: "01",
        title: "",
        paragraph1: "",
        paragraph2: "",
        boxTitle: "",
        bullets: ["", "", "", "", ""],
      },

      {
        number: "02",
        title: "",
        paragraph1: "",
        paragraph2: "",
        boxTitle: "",
        bullets: ["", "", "", "", ""],
      },

      {
        number: "03",
        title: "",
        paragraph1: "",
        paragraph2: "",
        boxTitle: "",
        bullets: ["", "", "", "", ""],
      },

      {
        number: "04",
        title: "",
        paragraph1: "",
        paragraph2: "",
        boxTitle: "",
        bullets: ["", "", "", "", ""],
      },

      {
        number: "05",
        title: "",
        paragraph1: "",
        paragraph2: "",
        boxTitle: "",
        bullets: ["", "", "", "", ""],
      },
    ],

    cta: {
      title: "",
      description: "",
      buttonText: "",
      buttonLink: "",
    },
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      title: value,
      slug: generateSlug(value),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    const data = new FormData();

    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("excerpt", formData.excerpt);
    data.append("category", formData.category);

    data.append("metaTitle", formData.metaTitle);
    data.append(
      "metaDescription",
      formData.metaDescription
    );

    data.append("status", formData.status);

    data.append(
      "intro",
      JSON.stringify(formData.intro)
    );

    data.append(
      "tableOfContents",
      JSON.stringify(formData.tableOfContents)
    );

    data.append(
      "sections",
      JSON.stringify(formData.sections)
    );

    data.append(
      "cta",
      JSON.stringify(formData.cta)
    );

    if (featuredImage) {
      data.append(
        "featuredImage",
        featuredImage
      );
    }

    if (bannerImage) {
      data.append(
        "bannerImage",
        bannerImage
      );
    }

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/blogs`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    alert("Blog Created Successfully");

    console.log(res.data);
  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message ||
        "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Create Blog</h1>

      <form onSubmit={submitHandler} className="grid lg:grid-cols-3 gap-8">
        {/* ================= LEFT ================= */}

        <div className="lg:col-span-2 space-y-6">
          {/* ================= GENERAL ================= */}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">General Information</h2>

            {/* Title */}

            <div className="mb-5">
              <label className="block font-semibold mb-2">Blog Title</label>

              <input
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Slug */}

            <div className="mb-5">
              <label className="block font-semibold mb-2">Slug</label>

              <input
                type="text"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slug: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Category */}

            <div className="mb-5">
              <label className="block font-semibold mb-2">Category</label>

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Excerpt */}

            <div>
              <label className="block font-semibold mb-2">Excerpt</label>

              <textarea
                rows={5}
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>

          {/* ================= SEO ================= */}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">SEO Settings</h2>

            <div className="mb-5">
              <label className="block font-semibold mb-2">Meta Title</label>

              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Meta Description
              </label>

              <textarea
                rows={5}
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>

          {/* ================= INTRODUCTION ================= */}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Introduction</h2>

            <div className="mb-5">
              <label className="block font-semibold mb-2">Paragraph 1</label>

              <textarea
                rows={6}
                value={formData.intro.paragraph1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    intro: {
                      ...formData.intro,
                      paragraph1: e.target.value,
                    },
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Paragraph 2</label>

              <textarea
                rows={6}
                value={formData.intro.paragraph2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    intro: {
                      ...formData.intro,
                      paragraph2: e.target.value,
                    },
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
          {/* ================= BLOG SECTIONS ================= */}

          {formData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold mb-6">
                Section {section.number}
              </h2>

              {/* Heading */}

              <div className="mb-5">
                <label className="block font-semibold mb-2">Heading</label>

                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => {
                    const sections = [...formData.sections];

                    sections[sectionIndex].title = e.target.value;

                    setFormData({
                      ...formData,
                      sections,
                    });
                  }}
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Paragraph 1 */}

              <div className="mb-5">
                <label className="block font-semibold mb-2">Paragraph 1</label>

                <textarea
                  rows={5}
                  value={section.paragraph1}
                  onChange={(e) => {
                    const sections = [...formData.sections];

                    sections[sectionIndex].paragraph1 = e.target.value;

                    setFormData({
                      ...formData,
                      sections,
                    });
                  }}
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Paragraph 2 */}

              <div className="mb-5">
                <label className="block font-semibold mb-2">Paragraph 2</label>

                <textarea
                  rows={5}
                  value={section.paragraph2}
                  onChange={(e) => {
                    const sections = [...formData.sections];

                    sections[sectionIndex].paragraph2 = e.target.value;

                    setFormData({
                      ...formData,
                      sections,
                    });
                  }}
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Blue Box */}

              <div className="bg-[#f5f9ff] rounded-xl p-5 border">
                <h3 className="font-bold text-lg mb-5">Blue Box</h3>

                <div className="mb-5">
                  <label className="block font-semibold mb-2">
                    Blue Box Title
                  </label>

                  <input
                    type="text"
                    value={section.boxTitle}
                    onChange={(e) => {
                      const sections = [...formData.sections];

                      sections[sectionIndex].boxTitle = e.target.value;

                      setFormData({
                        ...formData,
                        sections,
                      });
                    }}
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                {section.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="mb-4">
                    <label className="block font-medium mb-2">
                      Bullet {bulletIndex + 1}
                    </label>

                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) => {
                        const sections = [...formData.sections];

                        sections[sectionIndex].bullets[bulletIndex] =
                          e.target.value;

                        setFormData({
                          ...formData,
                          sections,
                        });
                      }}
                      className="w-full border rounded-lg p-3"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* ================= CTA ================= */}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Call To Action</h2>

            <div className="mb-5">
              <label className="block font-semibold mb-2">CTA Title</label>

              <input
                type="text"
                value={formData.cta.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cta: {
                      ...formData.cta,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div className="mb-5">
              <label className="block font-semibold mb-2">
                CTA Description
              </label>

              <textarea
                rows={5}
                value={formData.cta.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cta: {
                      ...formData.cta,
                      description: e.target.value,
                    },
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold mb-2">Button Text</label>

                <input
                  type="text"
                  value={formData.cta.buttonText}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cta: {
                        ...formData.cta,
                        buttonText: e.target.value,
                      },
                    })
                  }
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Button Link</label>

                <input
                  type="text"
                  value={formData.cta.buttonLink}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cta: {
                        ...formData.cta,
                        buttonLink: e.target.value,
                      },
                    })
                  }
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="space-y-6">
          {/* Publish */}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Publish</h2>

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3"
            >
              <option value="draft">Draft</option>

              <option value="published">Published</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-5 bg-[#1B3C53] hover:bg-[#163247] text-white rounded-lg py-3"
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>

          {/* Featured Image */}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Featured Image</h2>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFeaturedImage(e.target.files[0])}
            />

            {featuredImage && (
              <img
                src={URL.createObjectURL(featuredImage)}
                className="mt-4 rounded-lg w-full h-52 object-cover"
                alt="Featured"
              />
            )}
          </div>

          {/* Banner Image */}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Banner Image</h2>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setBannerImage(e.target.files[0])}
            />

            {bannerImage && (
              <img
                src={URL.createObjectURL(bannerImage)}
                className="mt-4 rounded-lg w-full h-52 object-cover"
                alt="Banner"
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
