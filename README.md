# 🌐 Modular Three-Tier GCP Architecture with Terraform

This project provisions a **secure, modular three-tier architecture** on **Google Cloud Platform (GCP)** using Terraform.  

It follows the classic **network → application → database** model and is built to be reusable, modular, and beginner-friendly.

---

## 🗺️ Architecture Overview

### **Network Tier**
- Custom VPC
- Public subnet (for load balancer)
- Private subnet (for application + database)
- Cloud NAT for internet access from private resources

### **Application Tier**
- Compute Engine Managed Instance Group (MIG)
- Instance Template (for VM configuration)
- HTTP(S) Load Balancer for external traffic
- Autoscaling policy for app servers

### **Database Tier**
- Cloud SQL (PostgreSQL)
- Private IP connectivity (inside private subnet)
- Securely accessed only by the application tier

### **Monitoring**
- Cloud Monitoring & Logging (Stackdriver)
- Basic health checks on load balancer
- Metrics export for VM & database

---

## ✅ Prerequisites

Before you start, ensure you have:

1. **Installed Tools**
   - [Terraform](https://developer.hashicorp.com/terraform/downloads) (≥ v1.5)
   - [gcloud CLI](https://cloud.google.com/sdk/docs/install)
   - Git

2. **Google Cloud Setup**
   - A Google Cloud Project
   - Billing enabled
   - IAM role with permissions:
     - `roles/compute.admin`
     - `roles/sql.admin`
     - `roles/iam.serviceAccountUser`

3. **Authentication**
   ```bash
   gcloud auth login
   gcloud config set project <PROJECT_ID>

🚀 Setup & Deployment
1. Clone the Repo
git clone https://github.com/<your-username>/gcp-three-tier-terraform.git
cd gcp-three-tier-terraform

2. Initialize Terraform
   ```bash
terraform init

3. Plan the Infrastructure
   ```bash
terraform plan -var="project_id=<YOUR_PROJECT_ID>" -out=tfplan


4. Apply the Infrastructure
   ```bash
terraform apply "tfplan"


Terraform will provision:

VPC + subnets
Cloud NAT
Managed Instance Group + Load Balancer
Cloud SQL instance

🖥️ How to Access
Frontend / Load Balancer
Terraform outputs the external IP of the Load Balancer

Access it via:

terraform output load_balancer_ip
Open in your browser: http://<LB_IP>
PICTURE


Database
Accessible only from inside the private subnet
Connect using Cloud SQL Auth proxy or a Bastion host

📊 Monitoring
Logs: Cloud Logging Console
Metrics: Cloud Monitoring Console

🧹 Teardown

When done, clean up resources:
 ```bash
terraform destroy

Terraform Apply Success

Load Balancer serving app
Cloud SQL Instance in Console



# Full Stack Mini Project – React + Flask + PostgreSQL
## Continuation of Three-Tier Architecture with Terraform (GCP)

## 📌 Overview

This project is a Full Stack Mini App built as a hands-on continuation of the Three-Tier Architecture on GCP using Terraform.
It demonstrates how a frontend (React), backend (Flask), and database (PostgreSQL) work together in a modular 3-tier setup.

Frontend: React (Node.js) – Displays users in a simple table.
Backend: Flask (Python) – REST API to serve data from the database.
Database: PostgreSQL – Stores user records.
This mirrors the Three-Tier Architecture concept:
Presentation Layer (React) – Client UI

Application Layer (Flask) – API logic
Data Layer (PostgreSQL) – Persistent storage

## ⚡ Prerequisites
Before running locally, install:
Node.js
 (>= 18.x)
Python
 (>= 3.9)
PostgreSQL
 (>= 14)

OR use Docker for containerized setup


