"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  image: string;
  categories: Array<{
    name: string;
    color: string;
  }>;
  description: string;
  commentCount: number;
  users: Array<{
    avatar: string;
    name: string;
  }>;
}

export default function Component() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Dashlit",
      image: "https://i.ibb.co/ggM0Tn4/dashlit.png",
      categories: [
        { name: "Website", color: "text-orange-500 bg-orange-50" },
        { name: "Extension", color: "text-blue-500 bg-blue-50" },
      ],
      description: "A sleek dashboard extension for modern websites.",
      commentCount: 2,
      users: Array(3).fill({
        avatar: "/placeholder.svg?height=32&width=32",
        name: "Team Member",
      }),
    },
    {
      id: 2,
      title: "Docs SOL",
      image: "https://i.ibb.co/b5RDTpG/Screenshot-from-2024-11-04-23-44-26.png",
      categories: [
        { name: "Product", color: "text-green-500 bg-green-50" },
        { name: "Launch", color: "text-yellow-500 bg-yellow-50" },
      ],
      description: "Documentation management tool for SOL projects.",
      commentCount: 10,
      users: Array(3).fill({
        avatar: "/placeholder.svg?height=32&width=32",
        name: "Team Member",
      }),
    },
    {
      id: 3,
      title: "Sifu Security",
      image: "https://i.ibb.co/FHxrpcr/Screenshot-from-2024-11-04-22-08-08.png",
      categories: [
        { name: "Web3", color: "text-purple-500 bg-purple-50" },
        { name: "Product", color: "text-blue-500 bg-blue-50" },
      ],
      description: "An advanced security platform for Web3 users.",
      commentCount: 5,
      users: Array(3).fill({
        avatar: "/placeholder.svg?height=32&width=32",
        name: "Team Member",
      }),
    },
    {
      id: 4,
      title: "ORBIS AI",
      image: "https://i.ibb.co/9pRXdZP/Screenshot-from-2024-11-04-22-09-53.png",
      categories: [
        { name: "Web3", color: "text-orange-500 bg-orange-50" },
        { name: "Earning platform", color: "text-pink-500 bg-pink-50" },
      ],
      description: "An AI-powered earning platform for Web3.",
      commentCount: 8,
      users: Array(3).fill({
        avatar: "/placeholder.svg?height=32&width=32",
        name: "Team Member",
      }),
    },

    {
      id: 5,
      title: "Safeguard",
      image: "https://i.ibb.co/Y0BVHSN/Screenshot-from-2024-11-04-23-41-09.png",
      categories: [
        { name: "Web3", color: "text-orange-500 bg-orange-50" },
        { name: "Product", color: "text-green-500 bg-green-50" },
      ],
      description: "A security solution for Web3 applications.",
      commentCount: 2,
      users: Array(3).fill({
        avatar: "/placeholder.svg?height=32&width=32",
        name: "Team Member",
      }),
    },
    {
      id: 6,
      title: "Ved Analytics",
      image: "https://i.ibb.co/vJmkxsB/Screenshot-from-2024-11-04-23-35-10.png",
      categories: [
        { name: "Marketing", color: "text-red-500 bg-red-50" },
        { name: "Analysis", color: "text-indigo-500 bg-indigo-50" },
      ],
      description: "A marketing and analytics tool for businesses.",
      commentCount: 3,
      users: Array(3).fill({
        avatar: "/placeholder.svg?height=32&width=32",
        name: "Team Member",
      }),
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;600&display=swap");
      `}</style>
      <div className="container mx-auto p-6">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center font-['Bebas_Neue'] tracking-wider text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Our Extraordinary Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-black">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-x-2">
                      {project.categories.map((category, index) => (
                        <motion.span
                          key={index}
                          className={`inline-block px-3 py-1 rounded-full text-xs font-['Poppins'] font-semibold ${category.color}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.1,
                          }}
                        >
                          {category.name}
                        </motion.span>
                      ))}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                  <motion.h3
                    className="font-['Bebas_Neue'] text-2xl mb-3 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-foreground font-['Poppins']"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
