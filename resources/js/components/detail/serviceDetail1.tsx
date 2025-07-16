"use client"

import React from "react"
import ImageDetailPage from "./ImageDetailPage"

const ServiceDetail1: React.FC = () => {
  return (
    <ImageDetailPage
      imageId="service1"
      imageSrc="/png/1st.jpg"
      title="CRISIS MANAGEMENT"
      description="At ARMA, we understand that corporate crises require immediate, expert intervention. Our crisis management service is designed to provide swift, strategic responses to protect your organization's reputation, operations, and financial stability. With decades of combined experience, our team works tirelessly to identify risks, develop comprehensive mitigation strategies, and guide your organization through even the most challenging situations with confidence and precision."
    />
  )
}

export default ServiceDetail1
