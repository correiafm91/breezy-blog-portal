
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import BlogCard from "@/components/BlogCard";
import BlogPost from "@/components/BlogPost";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(
    null
  );

  return (
    <div className="min-h-screen bg-background text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Logo />
        </header>

        <AnimatePresence mode="wait">
          {selectedPost ? (
            <BlogPost
              key="post"
              title={selectedPost.title}
              content={selectedPost.content}
              date={selectedPost.date}
              onBack={() => setSelectedPost(null)}
            />
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  onClick={() => setSelectedPost(post)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
