module.exports = async function (context, req) {

    const resume = {
        personal_info: {
            name: "Nishok V S",
            location: "Coimbatore, Tamil Nadu",
            phone: "+91 76390 18883",
            email: "nishokvsampath@gmail.com",
            linkedin: "https://linkedin.com/in/nishok-vs"
        },
        professional_summary: "Azure-certified Cloud Engineer with hands-on experience in cloud infrastructure deployment, serverless architecture, and automation using Azure CLI and Bash. Microsoft Certified in AZ-900, DP-900, and AI-900, currently preparing for AZ-104. Demonstrated practical cloud implementation through live Azure Function API deployment, infrastructure configuration, monitoring setup, and RBAC management. Seeking an entry-level Azure Cloud Engineer or Azure Administrator role.",

        certifications: [
            { name: "Microsoft Certified: Azure Fundamentals", code: "AZ-900" },
            { name: "Microsoft Certified: Azure Data Fundamentals", code: "DP-900" },
            { name: "Microsoft Certified: Azure AI Fundamentals", code: "AI-900" },
            { name: "Microsoft Certified: Azure Administrator", code: "AZ-104", status: "Preparing" },
            { name: "AWS Certified Cloud Practitioner" }
        ],

        technical_skills: {
            cloud_azure: [
                "Azure Virtual Machines",
                "Azure Storage (Blob, Lifecycle Management)",
                "Virtual Networks (VNet)",
                "NSGs",
                "Azure AD",
                "RBAC",
                "Azure Monitor",
                "Azure CLI",
                "Azure Functions"
            ],
            devops_automation: [
                "REST APIs",
                "Git",
                "GitHub",
                "Bash scripting",
                "JSON handling"
            ],
            operating_systems: [
                "Linux (file systems, permissions, logs, SSH)"
            ]
        },

        projects: [
            {
                name: "Live Resume API – Serverless Cloud Application",
                technologies: [
                    "Azure Functions",
                    "Azure Portal",
                    "JSON",
                    "REST API",
                    "GitHub"
                ],
                description: [
                    "Designed and deployed a production-ready Azure Function serving resume data via REST API",
                    "Configured REST endpoint with CORS enabled and automatic scaling",
                    "Managed secure deployment using Azure Portal and GitHub integration",
                    "Structured resume data in JSON format for API-based access"
                ]
            },
            {
                name: "Azure Infrastructure Lab – Hands-On Practice",
                description: [
                    "Deployed Linux VM with secure SSH access",
                    "Configured NSGs and validated network connectivity",
                    "Implemented Azure RBAC for access control",
                    "Configured Azure Monitor alerts for CPU and disk thresholds",
                    "Performed resource cleanup and cost management"
                ]
            },
            {
                name: "AWS Security Compliance Scanner – Automation Project",
                tools: ["AWS CLI", "Bash", "JMESPath"],
                description: [
                    "Developed script to detect publicly exposed S3 buckets",
                    "Scanned security groups for open ports (0.0.0.0/0 exposure)",
                    "Generated structured compliance reports identifying misconfigurations"
                ]
            }
        ],

        experience: [
            {
                role: "Python Data Analyst Intern",
                company: "Accent Techno Soft",
                duration: "Dec 2023 – Jan 2024",
                responsibilities: [
                    "Analyzed structured datasets using Python and SQL",
                    "Automated data cleaning workflows using Python scripting",
                    "Generated structured reports and documented analytical processes",
                    "Improved data accuracy by identifying inconsistencies"
                ]
            }
        ],

        education: {
            degree: "B.Sc. Computer Science with Data Science",
            institution: "Nehru Arts and Science College, Coimbatore",
            graduation_year: 2024,
            percentage: "71%"
        },

        core_competencies: [
            "Cloud Infrastructure Management",
            "Secure Access Configuration",
            "Incident Troubleshooting",
            "Automation & CLI Operations",
            "Monitoring & Alert Configuration",
            "Documentation & Structured Problem Solving"
        ]
    };

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: resume
    };
};
