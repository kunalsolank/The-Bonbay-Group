import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const blogVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const blogs = [
  {
    id: 1,
    title: "Why Gold is the Best Investment and Trading Option in 2024",
    description:
      "Why Gold is the Best Investment and Trading Option in 2024",
    image: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/blog-placeholder.webp",
    link: "/blog/why-gold-is-the-best-investment",
  },
  {
    id: 2,
    title: "Why Forex Trading Is One of the Best Career Options in 2024",
    description:
      "In recent years, forex trading has steadily risen in popularity, drawing in aspiring traders...",
    image: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/blog-placeholder.webp",
    link: "/blog/why-gold-is-the-best-investment",
  },
  {
    id: 3,
    title: "A Beginner’s Guide to Trading Silver",
    description:
      "Silver, a precious metal with high industrial demand, offers an exciting opportunity for traders...",
    image: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/blog-placeholder.webp",
    link: "/blog/beginners-guide-to-silver",
  },
];

function BlogCardGrid() {
  return (
    <section className="relative overflow-hidden bg-[#05040b] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Blog Grid */}
        <motion.div
          variants={blogVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>

        {/* View All Blogs */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 rounded-full bg-[#008f5a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#008f5a]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#007b4e] hover:shadow-xl"
          >
            View All Blogs

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogCardGrid;