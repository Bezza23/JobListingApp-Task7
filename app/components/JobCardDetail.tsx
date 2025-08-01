import React from "react";
import { JobCardProps } from "../types";
import Link from "next/link";

const JobCardDetail = ({ job }: JobCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
      <div className="">
        <Link href="/" className="text-blue-600 hover:underline mb-8 block">
          ← Back to Opportunities
        </Link>

        <div className = ''>
          <h1 className="text-xl font-extrabold mb-3">Description</h1>
          <p>{job.description}</p>
        </div>
        <div className="responsiblity">
          <h1 className="text-xl font-extrabold mb-3 mt-3">Responsibility</h1>
          <ul>
            {job.responsibilities.map((res) => {
              return (
                <li key={res} className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_138_1223)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5 3.33335C6.81812 3.33335 3.83335 6.31812 3.83335 10C3.83335 13.6819 6.81812 16.6667 10.5 16.6667C14.1819 16.6667 17.1667 13.6819 17.1667 10C17.1667 6.31812 14.1819 3.33335 10.5 3.33335ZM2.16669 10C2.16669 5.39765 5.89765 1.66669 10.5 1.66669C15.1024 1.66669 18.8334 5.39765 18.8334 10C18.8334 14.6024 15.1024 18.3334 10.5 18.3334C5.89765 18.3334 2.16669 14.6024 2.16669 10Z"
                        fill="#56CDAD"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5893 7.74408C13.9147 8.06951 13.9147 8.59715 13.5893 8.92259L10.2559 12.2559C9.93051 12.5814 9.40287 12.5814 9.07743 12.2559L7.41076 10.5893C7.08533 10.2638 7.08533 9.73618 7.41076 9.41074C7.7362 9.08531 8.26384 9.08531 8.58928 9.41074L9.66669 10.4882L12.4108 7.74408C12.7362 7.41864 13.2638 7.41864 13.5893 7.74408Z"
                        fill="#56CDAD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_138_1223">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {res}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="ideal_candinate">
          <h1 className="text-xl font-extrabold mb-3 mt-3">
            Ideal Candinate we want
          </h1>
          <ul className="list-disc list-outside ">
            <li className="ml-3">Age:{job.ideal_candidate.age}</li>
            <li className="ml-3">Gender:{job.ideal_candidate.gender}</li>
            {job.ideal_candidate.traits.map((trait) => {
              return (
                <li key={trait} className="ml-3">
                  {trait}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="when-where">
          <h1 className="text-xl font-extrabold mb-3 mt-3">When & Where</h1>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#D6DDEB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 20.5005C25 19.1192 23.8808 18 22.5005 18C21.1192 18 20 19.1192 20 20.5005C20 21.8808 21.1192 23 22.5005 23C23.8808 23 25 21.8808 25 20.5005Z"
                stroke="#26A4FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4995 31C21.301 31 15 25.8984 15 20.5633C15 16.3866 18.3571 13 22.4995 13C26.6419 13 30 16.3866 30 20.5633C30 25.8984 23.698 31 22.4995 31Z"
                stroke="#26A4FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>
              The onboarding for this event will take place in{" "}
              {job.about.start_date} in AAU Auditorium
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mb-5 ml-6">
          <h1 className="text-xl font-extrabold mb-3">About</h1>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#D6DDEB"
              />
              <path
                d="M31.5 22C31.5 26.9706 27.4706 31 22.5 31C17.5294 31 13.5 26.9706 13.5 22C13.5 17.0294 17.5294 13 22.5 13M22.5 13C23.9368 13 25.295 13.3367 26.5 13.9355C26.5 13.9355 25.3085 13.4068 24.5 13.223C23.7337 13.0488 22.5 13 22.5 13ZM22.5 19V25M25.5 22H19.5"
                stroke="#26A4FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="mb-3">
              <span className="text-gray-500">Posted On </span>
              <br />
              {job.about.posted_on}
            </p>
          </div>

          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#D6DDEB"
              />
              <path
                d="M18.9678 18.3945L18.9655 18.3963L18.9634 18.3984L18.9678 18.3945ZM28.9219 18.208C28.8523 18.1409 28.7751 18.0823 28.6919 18.0332C28.5741 17.9638 28.4433 17.9194 28.3076 17.9026C28.1719 17.8858 28.0343 17.897 27.9031 17.9356C27.7719 17.9741 27.6501 18.0391 27.5451 18.1266C27.44 18.2142 27.3541 18.3223 27.2925 18.4443C26.948 19.123 26.4729 19.727 25.8945 20.2217C25.9829 19.7233 26.0275 19.2181 26.0278 18.7119C26.0296 17.172 25.6234 15.6591 24.8504 14.3272C24.0775 12.9954 22.9654 11.8922 21.6274 11.1299C21.48 11.0463 21.3138 11.0016 21.1444 10.9999C20.9749 10.9981 20.8079 11.0395 20.6588 11.12C20.5097 11.2006 20.3836 11.3176 20.2922 11.4603C20.2008 11.6029 20.1471 11.7665 20.1362 11.9356C20.0802 12.8837 19.8323 13.8107 19.4076 14.6602C18.9828 15.5098 18.39 16.2642 17.665 16.8779L17.4345 17.0654C16.6764 17.5755 16.0054 18.2043 15.4472 18.9277C14.5795 20.0208 13.9785 21.3011 13.6917 22.6669C13.4049 24.0327 13.4403 25.4466 13.795 26.7964C14.1498 28.1462 14.8141 29.3947 15.7354 30.4431C16.6567 31.4914 17.8095 32.3107 19.1025 32.8359C19.2544 32.898 19.4191 32.9217 19.5823 32.905C19.7454 32.8883 19.902 32.8317 20.0381 32.7402C20.1742 32.6488 20.2857 32.5252 20.3628 32.3804C20.4398 32.2357 20.4801 32.0741 20.48 31.9101C20.4793 31.8041 20.4625 31.6987 20.4302 31.5976C20.2065 30.7567 20.142 29.8813 20.2403 29.0166C21.1865 30.8013 22.7054 32.216 24.5528 33.0332C24.7782 33.1341 25.0332 33.1476 25.2681 33.0713C26.7277 32.6002 28.0425 31.7637 29.0877 30.6413C30.133 29.5189 30.8738 28.1479 31.24 26.6586C31.6061 25.1692 31.5853 23.611 31.1796 22.1319C30.7739 20.6528 29.9967 19.3021 28.9219 18.208ZM25.0171 31.039C24.1454 30.5973 23.3765 29.977 22.7602 29.2185C22.144 28.46 21.6943 27.5804 21.4404 26.6367C21.3629 26.319 21.3029 25.9972 21.2607 25.6728C21.2322 25.4663 21.1398 25.2738 20.9965 25.1224C20.8532 24.9709 20.6661 24.868 20.4614 24.8281C20.3984 24.8157 20.3343 24.8095 20.27 24.8096C20.0942 24.8095 19.9216 24.8558 19.7694 24.9437C19.6172 25.0317 19.491 25.1582 19.4033 25.3106C18.5736 26.7417 18.1563 28.3746 18.1977 30.0283C17.468 29.4609 16.8581 28.7543 16.4034 27.9495C15.9487 27.1447 15.6583 26.2576 15.549 25.3397C15.4397 24.4218 15.5136 23.4914 15.7666 22.6023C16.0195 21.7131 16.4464 20.8831 17.0224 20.1602C17.4599 19.592 17.9875 19.0995 18.5844 18.7022C18.6103 18.6855 18.6351 18.6672 18.6587 18.6475C18.6587 18.6475 18.9554 18.402 18.9655 18.3964C20.3902 17.1913 21.4035 15.5719 21.8642 13.7637C22.9538 14.7709 23.6803 16.1097 23.931 17.5722C24.1816 19.0347 23.9424 20.539 23.2505 21.8516C23.159 22.0267 23.1215 22.225 23.1427 22.4215C23.1638 22.6179 23.2427 22.8037 23.3693 22.9554C23.4959 23.107 23.6646 23.2178 23.8541 23.2737C24.0436 23.3297 24.2454 23.3282 24.4341 23.2696C25.9658 22.7894 27.3138 21.8515 28.2964 20.5821C28.8869 21.4544 29.273 22.4487 29.4259 23.4909C29.5787 24.5332 29.4944 25.5965 29.1792 26.6016C28.864 27.6068 28.326 28.5278 27.6054 29.2961C26.8847 30.0644 26 30.6602 25.0171 31.0391L25.0171 31.039Z"
                fill="#26A4FF"
              />
            </svg>
            <p className="mb-3">
              <span className="text-gray-500">Deadline</span> <br />
              {job.about.deadline}
            </p>
          </div>

          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#D6DDEB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 20.5005C25 19.1192 23.8808 18 22.5005 18C21.1192 18 20 19.1192 20 20.5005C20 21.8808 21.1192 23 22.5005 23C23.8808 23 25 21.8808 25 20.5005Z"
                stroke="#26A4FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4995 31C21.301 31 15 25.8984 15 20.5633C15 16.3866 18.3571 13 22.4995 13C26.6419 13 30 16.3866 30 20.5633C30 25.8984 23.698 31 22.4995 31Z"
                stroke="#26A4FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="mb-3">
              <span className="text-gray-500">Location</span> <br />
              {job.about.location}
            </p>
          </div>

          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#D6DDEB"
              />
              <path
                d="M17.25 13V15.25M27.75 13V15.25M13.5 28.75V17.5C13.5 16.2574 14.5074 15.25 15.75 15.25H29.25C30.4926 15.25 31.5 16.2574 31.5 17.5V28.75M13.5 28.75C13.5 29.9926 14.5074 31 15.75 31H29.25C30.4926 31 31.5 29.9926 31.5 28.75M13.5 28.75V21.25C13.5 20.0074 14.5074 19 15.75 19H29.25C30.4926 19 31.5 20.0074 31.5 21.25V28.75"
                stroke="#26A4FF"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5 22.8768C20.5 22.5906 20.8069 22.4092 21.0577 22.5471L24.9179 24.6703C25.1779 24.8132 25.1779 25.1868 24.9179 25.3297L21.0577 27.4529C20.8069 27.5908 20.5 27.4094 20.5 27.1232V22.8768Z"
                stroke="#26A4FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="mb-3">
              <span className="text-gray-500">Start Date</span> <br />
              {job.about.start_date}
            </p>
          </div>

          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#D6DDEB"
              />
              <path
                d="M17.25 13V15.25M27.75 13V15.25M13.5 28.75V17.5C13.5 16.2574 14.5074 15.25 15.75 15.25H29.25C30.4926 15.25 31.5 16.2574 31.5 17.5V28.75M13.5 28.75C13.5 29.9926 14.5074 31 15.75 31H29.25C30.4926 31 31.5 29.9926 31.5 28.75M13.5 28.75V21.25C13.5 20.0074 14.5074 19 15.75 19H29.25C30.4926 19 31.5 20.0074 31.5 21.25V28.75"
                stroke="#26A4FF"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5 24.7222L22.2778 26.5L24.9444 22.5"
                stroke="#26A4FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="mb-3">
              <span className="text-gray-500">End Date</span> <br />
              {job.about.end_date}
            </p>
          </div>
        </div>
        <div className=" ml-6 mb-5 border-b pb-4">
          <h1 className="text-xl font-extrabold mb-4 mt-3">Catagory</h1>
          {job.about.categories.map((catagory, index) => {
            return (
              <span
                key={catagory}
                className={`${
                  index === 0
                    ? "border-yellow-600 border bg-yellow-100 text-yellow-600 rounded-2xl p-1.5 m-1"
                    : "border-blue-700 border bg-blue-100 text-blue-700 rounded-2xl p-1.5 m-1"
                }`}
              >
                {catagory}
              </span>
            );
          })}
        </div>
        <div className="ml-6 border-b pb-4">
          <h1 className="text-xl font-extrabold mb-3 mt-3">Required Skills</h1>
          <div className="flex flex-wrap gap-2">
            {job.about.required_skills.map((skill) => {
              return (
                <span
                  key={skill}
                  className="bg-purple-100 text-indigo-800 px-3 py-1 rounded-md text-sm"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardDetail;
