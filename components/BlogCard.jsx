import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ title, description, imageUrl, link, date, topics }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-900 dark:bg-gray-900">
      {/* Blog Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 text-white dark:text-white line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-400 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {topics &&
            topics.map((topic, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
              >
                #{topic}
              </span>
            ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{date}</span>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer">
              Read More →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
