import React, { useState } from "react";
import {
  RiGraduationCapFill,
  RiUserCommunityFill,
  RiTeamLine,
//   RiUserReceived2Fill,
} from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { LiaChartBarSolid } from "react-icons/lia";
import { PiBuildingsBold, PiCertificateLight } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";

function OurPlans() {
    const plansData = {
        Overview: [
          { feature: "Course & Labs Library", free: "Limited Access", pro: "✔", teams: "✔", enterprise: "✔" },
          { feature: "Career Paths", free: "Limited Access", pro: "✔", teams: "✔", enterprise: "✔" },
          { feature: "Skill Paths", free: "Limited Access", pro: "✔", teams: "✔", enterprise: "✔" },
          { feature: "Certification Prep Paths", free: "Limited Access", pro: "✔", teams: "✔", enterprise: "✔" },
        ],
        Core: [
          { feature: "Cyber Threat-Readiness", free: "✘", pro: "✔", teams: "✔", enterprise: "✔" },
          { feature: "Community", free: "✘", pro: "✔", teams: "✔", enterprise: "✔" },
        ],
        "Career Paths": [
          { feature: "Baseline & Benchmark", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
          { feature: "Team Insights & Analytics", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
        ],
        "Cyber Skills": [
          { feature: "Baseline & Benchmark", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
          { feature: "Team Insights & Analytics", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
        ],
        "Certification Prep": [
          { feature: "Baseline & Benchmark", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
          { feature: "Team Insights & Analytics", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
        ],
        "Cyber Threat-Readiness": [
          { feature: "Baseline & Benchmark", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
          { feature: "Team Insights & Analytics", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
        ],
        Community: [
          { feature: "Baseline & Benchmark", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
          { feature: "Team Insights & Analytics", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
        ],
        Teams: [
          { feature: "Baseline & Benchmark", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
          { feature: "Team Insights & Analytics", free: "✘", pro: "✘", teams: "✔", enterprise: "✔" },
        ],
      };
      
      const sectionIcons = {
        Overview: <RiGraduationCapFill className="text-xl text-gray-400" />,
        Core: <RxDiscordLogo className="text-xl text-gray-400" />,
        "Career Paths": <LiaChartBarSolid className="text-xl text-gray-400" />,
        "Cyber Skills": <GiSkills className="text-xl text-gray-400" />,
        "Certification Prep": <PiCertificateLight className="text-xl text-gray-400" />,
        "Cyber Threat-Readiness": <PiBuildingsBold className="text-xl text-gray-400" />,
        Community: <RiUserCommunityFill className="text-xl text-gray-400" />,
        Teams: <RiTeamLine className="text-xl text-gray-400" />,
      };
      

        const [openSections, setOpenSections] = useState(["Overview"]);
      
        const toggleSection = (section) => {
          setOpenSections((prev) =>
            prev.includes(section)
              ? prev.filter((s) => s !== section) // Close section
              : [...prev, section] // Open section
          );
        };
      
  return (
    <div className="max-w-4xl mx-auto bg-gray-900 text-white p-6 rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Compare our plans</h1>
                {Object.entries(plansData).map(([section, plans]) => (
                    <div key={section} className="mb-4">
                        <button
                            onClick={() => toggleSection(section)}
                            className="w-full text-left bg-gray-800 p-3 rounded-lg flex justify-between items-center"
                        >
                            <div className="flex items-center gap-3">
                                {sectionIcons[section]} {/* Icon on the left */}
                                <span className="font-semibold">{section}</span>
                            </div>
                            <span>{openSections.includes(section) ? "▲" : "▼"}</span>
                        </button>
                        {openSections.includes(section) && (
                            <table className="w-full mt-3 table-fixed border-collapse border border-gray-700">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-700 p-2">Feature</th>
                                        <th className="border border-gray-700 p-2">Free</th>
                                        <th className="border border-gray-700 p-2">Pro</th>
                                        <th className="border border-gray-700 p-2">Teams</th>
                                        <th className="border border-gray-700 p-2">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plans.map((plan, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-700 p-2">{plan.feature}</td>
                                            <td className="border border-gray-700 p-2">{plan.free}</td>
                                            <td className="border border-gray-700 p-2">{plan.pro}</td>
                                            <td className="border border-gray-700 p-2">{plan.teams}</td>
                                            <td className="border border-gray-700 p-2">{plan.enterprise}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                ))}
            </div>
  )
}

export default OurPlans;
