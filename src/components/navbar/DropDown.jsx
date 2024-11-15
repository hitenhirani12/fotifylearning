import Dropdown from 'react-multilevel-dropdown';
import './dropdownStyles.css'; // Custom CSS for hover behavior
import { RiShoppingBag4Line, RiQuestionAnswerLine, RiTeamFill } from "react-icons/ri";
import { GiSkills, GiProgression, GiTeamIdea, GiFamilyHouse } from "react-icons/gi";
import { PiCertificateBold, PiTargetLight, PiBrowsersLight } from "react-icons/pi";
import { MdOutlineForum, MdCompareArrows } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { DiGitCompare } from "react-icons/di";
import { IoMdPerson } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { SiFramework } from "react-icons/si";
import { Link } from 'react-router-dom';

function DropDown() {
    return (
        <div className='w-full flex justify-evenly items-center p-2 dropdowns'>
            <Dropdown title='Catalog ↴' className='dropdowns' openOnHover position='right' >

                <Dropdown.Item className='flex gap-2 p-4 rounded-lg  hover:bg-gray-900 items-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg'>
                    <Link to='career-path' className='flex items-center'>
                        <RiShoppingBag4Line className='text-2xl mr-2 text-blue-500' />
                        <div>
                            <h1 className='text-lg font-semibold'>Career Paths</h1>
                            <p className='text-sm text-gray-400'>Launch or advance your career with curated collections of courses, labs, and more.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='skill-paths' className='flex items-center'>
                        <GiSkills className='text-2xl mr-2' />
                        <div>
                            <h1>Skill Paths</h1>
                            <p>Launch or advance your career with curated collections of courses, labs, and more.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='certification-prep' className='flex items-center'>
                        <PiCertificateBold className='text-2xl mr-2' />
                        <div>
                            <h1>Certification Prep</h1>
                            <p>Prepare for and maintain leading cybersecurity certifications.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='mission-readiness' className='flex items-center'>
                        <PiTargetLight className='text-2xl mr-2' />
                        <div>
                            <h1>Mission Readiness</h1>
                            <p>Learn how to detect and mitigate the latest threats and vulnerabilities.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='browse-catalog' className='flex items-center'>
                        <PiBrowsersLight className='text-2xl mr-2' />
                        <div>
                            <h1>Browse the Catalog</h1>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='instructors' className='flex items-center'>
                        <RiQuestionAnswerLine className='text-2xl mr-2' />
                        <div>
                            <h1>Instructors</h1>
                        </div>
                    </Link>
                </Dropdown.Item>
            </Dropdown>

            <Dropdown title='for individuals ↴' className='custom-dropdown' openOnHover position='right'>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='career-path' className='flex items-center'>
                        <RiShoppingBag4Line className='text-2xl mr-2' />
                        <div>
                            <h1>Career Paths</h1>
                            <p>Launch or advance your career with curated collections of courses, labs, and more</p>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item>
                            <h1>Foundations</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='it-cybersecurity' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>It and Cybersecurity Foundations</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>It and Cybersecurity Foundations
                                                <br />
                                                career path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <h1>Defensive Security</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='it-cybersecurity' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>Become an incident handler</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>Become an SOC Analyst - level 3
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>Become an SOC Analyst - level 2
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>Become an SOC Analyst - level 1
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>Incident Handler Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/soc1' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>SOC Analyst 1
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>SOC Analyst 2
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>SOC Analyst 3
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>soc analyst career path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <h1>Offensive Security</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='career-path/penetration-tester' className='flex items-center'>
                                        <div>
                                            <h1>Become a penetration tester</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/penetration-tester' className='flex items-center'>
                                        <div>
                                            <h1>Penetration tester career path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <h1>Engineering and Operations</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='career-path/network-engineer' className='flex items-center'>
                                        <div>
                                            <h1>Become an Network Engineer</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/security-engineer' className='flex items-center'>
                                        <div>
                                            <h1>Become a cybersecurity engineer
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/microsoft-azure-cloud-engineer' className='flex items-center'>
                                        <div>
                                            <h1>Become an Azure Cloud Engineer
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/system-administrator' className='flex items-center'>
                                        <div>
                                            <h1>Become an System Administrator
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/network-engineer' className='flex items-center'>
                                        <div>
                                            <h1>Network Engineer Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/security-engineer' className='flex items-center'>
                                        <div>
                                            <h1>Security Engineer Career Path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/microsoft-azure-cloud-engineer' className='flex items-center'>
                                        <div>
                                            <h1>Azure Cloud Engineer Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/system-administrator' className='flex items-center'>
                                        <div>
                                            <h1>System Administrator Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <h1>Leadership and Management</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='career-path/leadership-and-management' className='flex items-center'>
                                        <div>
                                            <h1>Become a CISO</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/50-ciso-security-controls' className='flex items-center'>
                                        <div>
                                            <h1>50 Ciso Security Controls
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/12-competencies-of-the-effective-ciso' className='flex items-center'>
                                        <div>
                                            <h1>12 Competencies of the Effective Ciso
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/leadership-and-management' className='flex items-center'>
                                        <div>
                                            <h1>CISO Certifications, Training and Career Path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/50-ciso-security-controls' className='flex items-center'>
                                        <div>
                                            <h1>50 CISO Security Controls
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='career-path/12-competencies-of-the-effective-ciso' className='flex items-center'>
                                        <div>
                                            <h1>12 Competencies of the Effective Ciso
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='forums' className='flex items-center'>
                        <MdOutlineForum className='text-2xl mr-2' />
                        <div>
                            <h1>Forums</h1>
                            <p>Discuss all things cybersecurity for free among the vast Cybrary community.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='free-access' className='flex items-center'>
                        <BsShieldCheck className='text-2xl mr-2' />
                        <div>
                            <h1>Free Access</h1>
                            <p>Get a taste of the catalog with certification prep, introductory courses, and more.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='insider-pro' className='flex items-center'>
                        <GiProgression className='text-2xl mr-2' />
                        <div>
                            <h1>Insider Pro</h1>
                            <p>Everything you need to learn, practice, and prove your cybersecurity skills.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='for-teams' className='flex items-center'>
                        <RiTeamFill className='text-2xl mr-2' />
                        <div>
                            <h1>For Teams</h1>
                            <p>Build your team’s cybersecurity skills and achieve new certifications, all in one place.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='insider-pro' className='flex items-center'>
                        <DiGitCompare className='text-2xl mr-2' />
                        <div>
                            <h1>Compare Plans</h1>
                            <p>Compare features across all plans.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='insider-pro' className='flex items-center'>
                        <IoMdPerson className='text-2xl mr-2' />
                        <div>
                            <h1>Individuals</h1>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                            <Link to='cybrary-insider' className='flex items-center'>
                                <h1>Cybrary Insider Pro</h1>

                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                            <Link to='free-content' className='flex items-center'>
                                <h1>Free Access</h1>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                            <Link to='career-path' className='flex items-center'>
                                <h1>Career Paths</h1>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                            <Link to='success-stories' className='flex items-center'>
                                <h1>Success Stories</h1>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>
            </Dropdown>

            <Dropdown title='for Business ↴' className='custom-dropdown' openOnHover position='right'>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='business' className='flex items-center'>
                        <GiTeamIdea className='text-2xl mr-2' />
                        <div>
                            <h1>Teams Features</h1>
                            <p>Build your team’s cybersecurity skills and achieve new certifications, all in one place.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='government' className='flex items-center'>
                        <GiFamilyHouse className='text-2xl mr-2' />
                        <div>
                            <h1>For Government</h1>
                            <p>Support your organization with a custom plan that works for your organization.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='mitre-attack' className='flex items-center'>
                        <TbTargetArrow className='text-2xl mr-2' />
                        <div>
                            <h1>Mission Readiness</h1>
                            <p>Learn how to detect and mitigate the latest threats and vulnerabilities.</p>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item>
                            <Link to='threat-actor-campaign' className='flex items-center'>
                                <div>
                                    <h1>Threat Actor Campaigns</h1>
                                </div>
                            </Link>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='threat-actor-campaign/magic-hound' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>Magic Hound</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='track-actor-campaign/double-trouble-with-double-dragon' className='flex items-center'>
                                        <div>
                                            <h1>Double trouble with Double dragon
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='track-actor-campaign/weak-link-in-the-supply-chain' className='flex items-center'>
                                        <div>
                                            <h1>Weak link in the Supply chain
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='track-actor-campaign/spinning-a-web-shell-for-initial-access' className='flex items-center'>
                                        <div>
                                            <h1>Spinning a web shell for initial access
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='track-actor-campaign/exfiltration-and-extortion' className='flex items-center'>
                                        <div>
                                            <h1>Exfiltration and Extortion
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <h1>CVE Series</h1>

                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='course/cve-series-f5-big-ip-cve-2022-1388' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>CVE Series: F5 Big IP (CVE 2022 1388)</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cve-series-couchdb-rce-cve-2022-24706' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>CVE Series: CouchDB RCE (CVE-2022-24706)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course//cve-series-atlassian-bitbucket-command-injection-cve-2022-36804' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>CVE Series: Atlassian Bitbucket Command Injection (CVE-2022-36804)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cve-series-grafana-directory-traversal-cve-2021-43798' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>CVE Series: Grafana Directory Traversal (CVE-2021-43798)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cve-series-blind-nosql-injection-cve-2021-22911' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>CVE Series: Blind NoSQL Injection (CVE-2021-22911)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cve-series-apache-httpd-cve-2021-42013' className='flex items-center'>
                                        <MdOutlineForum className='text-2xl mr-2' />
                                        <div>
                                            <h1>CVE Series: Apache HTTPD (CVE-2021-42013)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <h1>Cybrary Challenges</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item>
                                    <Link to='course/cybrary-challenge-space-mission1' className='flex items-center'>
                                        <div>
                                            <h1>Challenge: Space Mission</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cybrary-challenge-a-message-within-a-message' className='flex items-center'>
                                        <div>
                                            <h1>Challenge: A Message Within A Message
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cybrary-challenge-donot-believe-what-you-hear' className='flex items-center'>
                                        <div>
                                            <h1>Challenge: Don't Believe What You Hear
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cybrary-challenge-chatting-with-chatgpt' className='flex items-center'>
                                        <div>
                                            <h1>Challenge: Chatting with ChatGPT
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cybrary-challenge-saving-a-fellow-monster' className='flex items-center'>
                                        <div>
                                            <h1>Challenge: Saving a Fellow Monster
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='course/cybrary-challenge-gobble-gobble-conceal-and-deceive' className='flex items-center'>
                                        <div>
                                            <h1>Challenge: Gobble Gobble Conceal & Deceive
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='mitre-attack' className='flex items-center'>
                                <div>
                                    <h1>MITRE ATTACK</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='business' className='flex items-center'>
                        <BiSolidBusiness className='text-2xl mr-2' />
                        <div>
                            <h1>Business Resources</h1>
                            <p>Learn how Cybrary can help your team thrive.</p>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1>Case Studies</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1>Research Pages</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1>Articles</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1>White Pages</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='industry' className='flex items-center'>
                        <SiFramework className='text-2xl mr-2' />
                        <div>
                            <h1>Framework Alignment</h1>
                            <p>Learn how Cybrary aligns to established industry frameworks.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='free-access' className='flex items-center'>
                        <MdCompareArrows className='text-2xl mr-2' />
                        <div>
                            <h1>Teams Pricing</h1>
                            <p>Compare features across all plans.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <RiTeamFill className='text-2xl mr-2' />
                    <div>
                        <h1>Teams</h1>
                    </div>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item>
                            <Link to='business' className='flex items-center'>
                                <div>
                                    <h1>For Security Teams</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='Baselining' className='flex items-center'>
                                <div>
                                    <h1>Baselining</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='government' className='flex items-center'>
                                <div>
                                    <h1>For Government</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1>Team Resources</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

            </Dropdown>
            <li className="text-[18px] cursor-pointer flex items-center">Pricing </li>
        </div >

    );
}

export default DropDown;
