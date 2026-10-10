import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function BlogCard({ blog }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <Link to={blog.link || "/blog"} className="block h-full">
        <Card className="group relative w-full rounded-2xl border border-white/10 bg-[#0d0c16]/70 p-6 backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.06]">
          
          {/* Image */}
          <div className="relative aspect-[1.8/1] overflow-hidden bg-[#f7f7f7]">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <CardContent className="flex flex-col px-0 pb-7 pt-6">
            <div className="px-0">
              <h3 className="max-w-[95%] text-xl font-medium leading-[1.2] tracking-tight text-white transition-colors duration-300 group-hover:text-[#008f5a] sm:text-[21px]">
                {blog.title}
              </h3>

              <p className="mt-4 line-clamp-2 text-[15px] font-normal leading-7 text-white">
                {blog.description}
              </p>
            </div>

            {/* Read more */}
            <div className="mt-6 flex  items-center gap-2 text-sm font-semibold text-[#008f5a] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              Read article
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default BlogCard;