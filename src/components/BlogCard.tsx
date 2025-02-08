
import { motion } from "framer-motion";
import { format } from "date-fns";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: Date;
  onClick: () => void;
}

const BlogCard = ({ title, excerpt, date, onClick }: BlogCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border border-white/10"
      onClick={onClick}
    >
      <div className="space-y-2">
        <span className="text-sm text-white/60">
          {format(date, "MMMM d, yyyy")}
        </span>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-white/80 line-clamp-3">{excerpt}</p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
