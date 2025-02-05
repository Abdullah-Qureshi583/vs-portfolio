import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Users, BookMarked, Star } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

async function getGithubProfile(): Promise<UserProfile> {
  const username = "Abdullah-Qureshi583";
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, // Use environment variable
    },
  });
  return response.json();
}

async function getGithubRepos(): Promise<Repository[]> {
  const username = "Abdullah-Qureshi583";
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, // Use environment variable
      },
    }
  );
  return response.json();
}

export default function Github() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const profileData = await getGithubProfile();
        const repositoriesData = await getGithubRepos();
        setProfile(profileData);
        setRepositories(repositoriesData);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="min-h-screen md:px-4 py-4">
      {/* Banner Section */}
      <div className="bg-gray-700 rounded-md shadow-md ">
        <div className=" mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            {loading ? (
              <Skeleton className="rounded-full">
                <Image
                  src={"/user-avatar.png"}
                  alt={"User Profile Image"}
                  width={250}
                  height={250}
                  className="w-36 h-36 rounded-full border-4 border-gray-700"
                />
              </Skeleton>
            ) : (
              <Image
                src={(profile?.avatar_url as string) || "/user-avatar.png"}
                alt={profile?.name || "User Profile Image"}
                width={250}
                height={250}
                className="w-36 h-36 rounded-full border-4 border-gray-700"
              />
            )}

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{profile?.name}</h1>
              {profile?.login && (
                <p className="text-gray-400">@{profile?.login}</p>
              )}
              <p className="mt-2">{profile?.bio}</p>

              {/* Stats */}
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span>{profile?.followers} followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span>{profile?.following} following</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-gray-400" />
                  <span>{profile?.public_repos} repositories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repositories Section */}
      <div className="mx-auto md:px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Repositories</h2>
        {loading ? (
          <p className="text-gray-400">Loading repositories...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : repositories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.map((repo) => (
              <Card
                key={repo.name}
                className="hover:shadow-lg transition-shadow bg-gray-800"
              >
                <CardContent className="p-6 text-gray-300">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-400 hover:underline"
                  >
                    {repo.name}
                  </a>
                  <p className="text-gray-400 mt-2">{repo.description}</p>

                  <div className="flex items-center gap-4 mt-4">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 "></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-gray-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-4 h-4 text-gray-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No repositories found.</p>
        )}
      </div>
    </main>
  );
}
