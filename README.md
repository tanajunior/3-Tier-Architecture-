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



