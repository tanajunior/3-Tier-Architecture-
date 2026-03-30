# 🌐 Modular Three-Tier Architecture on GCP with Terraform

![Terraform](https://img.shields.io/badge/Terraform-≥1.5-7B42BC?style=flat&logo=terraform&logoColor=white)
![GCP](https://img.shields.io/badge/Google_Cloud-Platform-4285F4?style=flat&logo=google-cloud&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Cloud_SQL-336791?style=flat&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=flat&logo=react&logoColor=black)
![Flask](https://img.shields.io/badge/Flask-Backend-000000?style=flat&logo=flask&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> A production-grade, modular three-tier cloud infrastructure provisioned entirely with Terraform on Google Cloud Platform — built to be secure, scalable, and reusable across environments.

---

## 📌 What This Project Demonstrates

This project was built to demonstrate real-world DevOps and cloud engineering skills:

- **Infrastructure as Code** — 100% Terraform, no manual console clicks
- **Network security** — private subnets, Cloud NAT, no public DB exposure
- **Scalability** — Managed Instance Groups with autoscaling policies
- **Modularity** — reusable Terraform modules for network, compute, and database tiers
- **Observability** — Cloud Monitoring and Logging integrated from day one

---

## 🏗️ Architecture Overview

```
                        ┌─────────────────────────────────────┐
                        │           Google Cloud VPC           │
                        │                                      │
  Internet ──────────►  │  [HTTP(S) Load Balancer]             │
                        │          │                           │
                        │  ┌───────▼────────┐  Public Subnet   │
                        │  │  Managed Instance Group (MIG)    │
                        │  │  App Servers + Autoscaling        │
                        │  └───────┬────────┘  Private Subnet  │
                        │          │                           │
                        │  ┌───────▼────────┐                  │
                        │  │   Cloud SQL     │  Private Subnet  │
                        │  │  (PostgreSQL)   │                  │
                        │  └────────────────┘                  │
                        │                                      │
                        │  Cloud NAT ── Cloud Monitoring       │
                        └─────────────────────────────────────┘
```

### Network Tier
- Custom VPC with public and private subnets
- Cloud NAT for outbound internet access from private resources
- Firewall rules enforcing least-privilege access

### Application Tier
- Compute Engine Managed Instance Group (MIG)
- Instance Template for consistent VM configuration
- HTTP(S) Load Balancer for external traffic distribution
- Autoscaling policy based on CPU utilization

### Database Tier
- Cloud SQL (PostgreSQL) with private IP only
- Accessible exclusively from within the private subnet
- No public endpoint exposed

### Observability
- Cloud Monitoring & Logging (Stackdriver)
- Health checks on load balancer
- Metrics export for VM and database performance

---

## 🗂️ Project Structure

```
gcp-three-tier-terraform/
├── modules/
│   └── compute_db/         # Compute + database module
├── public/                 # Frontend static assets
├── src/                    # Application source code
├── main.tf                 # Root Terraform configuration
├── variables.tf            # Input variables
├── outputs.tf              # Output values (LB IP, etc.)
├── .gitignore
├── package.json
└── README.md
```

---

## ✅ Prerequisites

Before you start, ensure you have:

- [Terraform](https://developer.hashicorp.com/terraform/downloads) ≥ v1.5
- [gcloud CLI](https://cloud.google.com/sdk/docs/install) installed and authenticated
- Git
- A Google Cloud Project with billing enabled

### Required IAM Roles
```
roles/compute.admin
roles/sql.admin
roles/iam.serviceAccountUser
```

### Authentication
```bash
gcloud auth login
gcloud config set project <YOUR_PROJECT_ID>
```

---

## 🚀 Setup & Deployment

### 1. Clone the repository
```bash
git clone https://github.com/tanajunior/3-Tier-Architecture-.git
cd 3-Tier-Architecture-
```

### 2. Initialize Terraform
```bash
terraform init
```

### 3. Plan the infrastructure
```bash
terraform plan -var="project_id=<YOUR_PROJECT_ID>" -out=tfplan
```

### 4. Apply the infrastructure
```bash
terraform apply "tfplan"
```

Terraform will provision:
- VPC + subnets
- Cloud NAT
- Managed Instance Group + HTTP(S) Load Balancer
- Cloud SQL PostgreSQL instance

---

## 🖥️ Accessing the Application

### Frontend / Load Balancer
```bash
terraform output load_balancer_ip
```
Open in your browser: `http://<LB_IP>`

### Database
Accessible only from inside the private subnet. Connect using:
- Cloud SQL Auth Proxy, or
- A Bastion host within the VPC

---

## 📊 Monitoring & Logs

| Resource | Console |
|---|---|
| Logs | Cloud Logging Console |
| Metrics | Cloud Monitoring Console |
| Health Checks | Load Balancer → Backend Health |

---

## 🔧 Teardown

To destroy all provisioned resources:
```bash
terraform destroy
```

---

## 🔭 Roadmap

- [ ] Port architecture to AWS (VPC + ALB + EC2 ASG + RDS)
- [ ] Add Kubernetes deployment option (GKE)
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Secrets management via GCP Secret Manager
- [ ] Multi-environment support (dev / staging / prod)

---

## 👤 Author

**Junior Tana**
DevOps Engineer | CS Student @ University of the People

[![GitHub](https://img.shields.io/badge/GitHub-tanajunior-181717?style=flat&logo=github)](https://github.com/tanajunior)

---

## 📄 License

This project is licensed under the MIT License.
