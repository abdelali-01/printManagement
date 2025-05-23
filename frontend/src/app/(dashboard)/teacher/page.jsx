"use client";
import Navbar from "@/components/dashboard/layout/Navbar";
import ReqTable from "@/components/dashboard/tables/ReqTable";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import PrinterLoader from "@/components/ui/PrinterLoader";

export default function page() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const router = useRouter();

  const {role} = useSelector((state) => state.auth);

  const handleCreateRequest = () => {
    router.push("/teacher?mode=create");
  };

  if(!role) return <PrinterLoader/>;
  if(role !== "teacher") return null;
  
  return (
    <div className="">
      <div className="container m-auto mt-[60px] px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold">Requests</h3>
          <button
            className="btn flex items-center gap-3"
            onClick={handleCreateRequest}
          >
            <PlusIcon className="size-6" />
            Create new request
          </button>
        </div>
        <div className="mt-5 flex items-center gap-3 justify-between flex-wrap-reverse">
          <div
            className="filter-card flex flex-wrap gap-3 items-center bg-white p-4 px-9 shadow rounded-md m-4"
            style={{ width: "fit-content" }}
          >
            <div
              className={`all cursor-pointer ${
                selectedStatus !== "all" && "opacity-60"
              }`}
              onClick={() => setSelectedStatus("all")}
            >
              All
            </div>
            <div
              className={`completed cursor-pointer ${
                selectedStatus !== "completed" && "opacity-60"
              }`}
              onClick={() => setSelectedStatus("completed")}
            >
              Completed
            </div>
            <div
              className={`wf_printer cursor-pointer ${
                selectedStatus !== "wf_printer" && "opacity-60"
              }`}
              onClick={() => setSelectedStatus("wf_printer")}
            >
              Wait for printer
            </div>
            <div
              className={`wf_teacher cursor-pointer ${
                selectedStatus !== "wf_teacher" && "opacity-60"
              }`}
              onClick={() => setSelectedStatus("wf_teacher")}
            >
              Wait for teacher
            </div>
          </div>
        </div>
        <ReqTable selectedStatus={selectedStatus} />
      </div>
    </div>
  );
}
