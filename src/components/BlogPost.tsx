
import { motion } from "framer-motion";
import { format } from "date-fns";

interface BlogPostProps {
  title: string;
  content: string;
  date: Date;
  onBack: () => void;
}

const BlogPost = ({ title, content, date, onBack }: BlogPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <button
        onClick={onBack}
        className="text-white/60 hover:text-white transition-colors"
      >
        ← Back to posts
      </button>
      <article className="prose prose-invert max-w-none">
        <div className="space-y-2 mb-8">
          <span className="text-sm text-white/60">
            {format(date, "MMMM d, yyyy")}
          </span>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
        <div
          className="text-white/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </motion.div>
  );
};

export default BlogPost;
