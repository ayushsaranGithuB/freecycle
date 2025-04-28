"use client";

import { useState, ChangeEvent } from "react";
import {  Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ListItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call
    console.log({ name, description });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List a New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="w-full"
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
