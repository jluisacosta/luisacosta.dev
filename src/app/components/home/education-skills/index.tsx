"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value?.title}</h5>
                        <h6>{value?.field}</h6>
                        <p className="font-normal">{value?.description}</p>
                      </div>
                    </div>
                  );
                })}
                <h4 className="font-semibold mt-4 sm:mb-4 xs:mb-4 sm:mt-8 xs:mt-8">Core Technologies</h4>
                <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                  {educationData?.skills?.map((value: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                      >
                        <div className="flex flex-col items-center gap-5">
                          <Image
                            src={getImgPath(value?.icon)}
                            alt="icon"
                            width={70}
                            height={70}
                          />
                          <p className="text-black font-normal">{value?.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex flex-col gap-0">
                <h4 className="font-semibold mb-4">Experience With</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-7 w-full">
                  {educationData?.experienceWith?.map((category: any, categoryIndex: any) => {
                    return (
                      <div
                        key={categoryIndex}
                        className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-4"
                      >
                        <h5 className="font-semibold text-black mb-2 inline-flex">
                          <div className="no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-primary mr-2 mt-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          </div>
                          {category?.category}
                        </h5>
                        <div className="flex flex-col gap-3">
                          {category?.items?.map((item: any, itemIndex: any) => {
                            return (
                              <div key={itemIndex} className="flex flex-col gap-1">
                                <p className="font-semibold text-sm text-black">{item?.title}</p>
                                <p className="text-sm font-normal text-black/80">{item?.description}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
