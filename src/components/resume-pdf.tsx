import React from 'react';

export function ResumePDF() {
  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8 font-sans text-sm">
      <style jsx>{`
        .resume-container {
          font-family: 'Times New Roman', serif;
          line-height: 1.4;
          color: #000;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #4472C4;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .contact-info {
          font-size: 12px;
          margin-bottom: 5px;
        }
        .section-header {
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom: 1px solid #000;
          margin-top: 20px;
          margin-bottom: 10px;
          padding-bottom: 2px;
        }
        .institution {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .degree {
          font-style: italic;
          margin-bottom: 5px;
        }
        .dates {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .job-title {
          font-weight: bold;
        }
        .company {
          font-style: italic;
        }
        .project-title {
          font-weight: bold;
          color: #4472C4;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }
        .skill-category {
          margin-bottom: 8px;
        }
        .skill-name {
          font-weight: bold;
        }
        ul {
          margin: 5px 0;
          padding-left: 20px;
        }
        li {
          margin-bottom: 3px;
        }
      `}</style>
      
      <div className="resume-container">
        {/* Header */}
        <div className="header">
          <div className="name">Bhuvan Mysore Sridhar</div>
          <div className="contact-info">📍 Chicago, Illinois, USA 📧 Bhuvanmysoresridhar@gmail.com 📱 +1 3122021130 🔗 LinkedIn</div>
        </div>

        {/* Education */}
        <div className="section-header">EDUCATION</div>
        <div style={{ marginBottom: '15px' }}>
          <div className="institution">Master of Science in Information Technology and Management | Illinois Institute of Technology | 3.83</div>
          <div className="dates">Chicago, IL | August 2024 - Present</div>
          <div>
            • <strong>Relevant Courses:</strong> Big Data, Cloud Technologies, Data Engineering, Data Warehousing, Project Management, Advanced Topics in Data Management, Service Oriented Architecture,
            Machine Learning, Quantitative Analysis, Apache Kafka, DevOps, Advanced Data Management, Information Assurance
          </div>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <div className="institution">Bachelor of Engineering in Computer Science and Engineering | JSS Science and Technology University</div>
          <div className="dates">Mysore, Karnataka | August 2020 - July 2024</div>
          <div>• <strong>Relevant Courses:</strong> Big Data Analytics, Data Mining, AI, Machine Learning, Software Engineering, Networking</div>
        </div>

        {/* Experience */}
        <div className="section-header">EXPERIENCE</div>
        <div style={{ marginBottom: '15px' }}>
          <div><span className="job-title">Junior Data Analyst | Tetra Solutions | </span><span className="company">Mysore, Karnataka | </span><strong>December 2022 - June 2024</strong></div>
          <ul>
            <li>Designed and implemented ETL data pipelines using SQL and Python across distributed systems, ensuring data integrity and improving data quality for enterprise decision-making processes</li>
            <li>Delivered automated reporting and real-time Power BI dashboards, streamlining workflows, uncovering key business patterns, and accelerating project timelines by resolving major data inconsistencies</li>
            <li>Executed comprehensive data analysis using SQL and data visualization tools, presenting clear patterns and summary dashboards to support cross-functional collaboration within teams</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="section-header">SKILLS</div>
        <div style={{ marginBottom: '15px' }}>
          <div className="skill-category">
            <span className="skill-name">Programming:</span> Python, SQL, Scala, Spark, R, MongoDB, Hadoop, Kafka, Kubernetes, PostgreSQL
          </div>
          <div className="skill-category">
            <span className="skill-name">Data Engineering:</span> Apache Spark, Hadoop, Apache Kafka, Apache Airflow, ETL Pipelines, Data Warehousing, Snowflake, Docker, Airflow, AWS Glue, S3, EMS, Kinesis, EventDriven
          </div>
          <div className="skill-category">
            <span className="skill-name">Programming:</span> Jenkins, IAM and Permissions
          </div>
          <div className="skill-category">
            <span className="skill-name">Cloud:</span> AWS, Azure, Oracle Cloud, Google Cloud, CI/CD Pipelines
          </div>
          <div className="skill-category">
            <span className="skill-name">Big Data & Analytics:</span> Data Visualization, Data Governance, Data Quality Management, Data Warehousing, Apache
          </div>
          <div className="skill-category">
            <span className="skill-name">Soft Skills:</span> Problem-Solving, Teamwork, Leadership, Analytical Thinking, Collaboration, Resourcefulness
          </div>
        </div>

        {/* Projects */}
        <div className="section-header">PROJECT</div>
        
        <div style={{ marginBottom: '15px' }}>
          <div className="project-title">Real-Time Stock & Crypto Streaming Data Lakehouse on AWS | Self Developed | GitHub | September 2025 - Present</div>
          <ul>
            <li>Built a sophisticated streaming data infrastructure capable of processing ~2,500+ records/sec of live cryptocurrency prices from Apache Kafka, ensuring low-latency delivery for analytics</li>
            <li>Designed Bronze-Silver-Gold Delta Lake architecture to store raw, cleaned, and analytical data with 99.9% schema enforcement and ACID compliance, optimizing query performance for downstream analytics</li>
            <li>Implemented AWS Lambda-based event-driven architecture with automated data quality checks and AWS EventBridge for orchestration, reducing manual monitoring and ensuring highly available data engineering solutions</li>
            <li>Optimized storage and compute, achieving 90%+ faster query performance on Delta tables compared to raw Parquet files</li>
            <li>Delivered a cloud-native data pipeline using AWS Lambda, Kinesis, Apache Spark, Delta Lake, optimizing streaming data engineering</li>
          </ul>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div className="project-title">Event-Driven Data Lakehouse with Real-Time Aggregation & Data Quality (PySpark, Delta Lake) | Self Developed (GitHub) | June 2025 - June 2025</div>
          <ul>
            <li>Built a 3-layer event-driven Data Lakehouse (Bronze → Silver → Gold) with 3 Data tables and 3 streaming jobs (Bronze Ingest, AWS customers, Gold Aggregation), 15K micro-batch ingestion pipeline using PySpark, optimizing them machine-learning classifier operations that refined 80% joins between 1st geographic and user dimensions across 850 concurrent records with comprehensive logging and metrics</li>
            <li>Implemented a data quality framework using Great Expectations to clean, validate, and transform data ensuring 95%+ data quality compliance and implemented data governance practices to prevent the flow of invalid data into downstream systems to maintain integrity</li>
            <li>Engineered via a reconciliation script that drift across nodes</li>
            <li>Classified and quarantined non-compliant records based on validation results, implementing automatic gatling mechanisms to prevent the flow of invalid data into machine learning systems</li>
          </ul>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div className="project-title">Serverless Lakehouse using Polars, DuckDB, and Delta- io on AWS | Self Developed (GitHub) | April 2025 - May 2025</div>
          <ul>
            <li>Architected a fully serverless ETL performance using DuckDB and Polars compared to traditional Spark-based processing for small-to-mid sized datasets</li>
            <li>Reduced infrastructure costs by 70% by eliminating the need for long-running clusters (3+ EMR/Spark), relying instead on serverless compute via AWS Lambda and lightweight Delta Lake storage on S3</li>
            <li>Enabled real-time querying on Delta Lake tables with sub-second latency using DuckDB over S3-backed Parquet files, supporting interactive analytics without standing infrastructure</li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="section-header">CERTIFICATIONS</div>
        <div style={{ marginBottom: '10px' }}>
          <div><strong>Google data analytics | Coursera | 2023</strong></div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <div><strong>Python for Data analysis | Udemy | 2025</strong></div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <div><strong>SQL for Data Analytics | Analyst Builder | 2024</strong></div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <div><strong>Data Engineering Bootcamp | Udemy | 2025</strong></div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <div><strong>Cloud Big Data Mastery Program | StacksOn-Tech | 2026</strong></div>
        </div>
      </div>
    </div>
  );
}