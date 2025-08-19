variable "instance_name" {}
variable "machine_type" {
  default = "e2-medium"
}
variable "zone" {}
variable "subnetwork" {}
variable "ssh_user" {}
variable "public_key_path" {}
