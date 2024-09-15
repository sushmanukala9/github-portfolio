import React from 'react';


const SocialMediaAnalysisProject: React.FC = () => {
  return (
    <div className="container project-container">
 

      <h1 className="mt-5">Social Media Analysis and Product Recommendation</h1>

      {/* Objective and Tech Stack */}
      <section className="mt-5">
        <h2>Objective and Tech Stack</h2>
        <ul>
          <li>This project involves sentiment analysis on social media data (Twitter) and product recommendations based on user feedback and trends.</li>
          <li>Tech stack: Hadoop and Spark on Amazon EMR, AWS Lambda, Amazon SageMaker for ML, and RDS for database.</li>
        </ul>
      </section>

      {/* Features and Functionality */}
      <section className="mt-5">
        <h2>Features and Functionality</h2>
        <ul>
          <li>Extracts trending hashtags and keywords from Twitter data using Hadoop and Spark.</li>
          <li>Uses sentiment analysis to classify user opinions and recommends products accordingly.</li>
          <li>Processes data in real time using AWS Lambda and stores results in Amazon RDS.</li>
        </ul>
      </section>

      {/* Code Snippets */}
      <section className="mt-5">
        <h2>Code Snippets</h2>
        <h3>Sentiment Analysis with SageMaker</h3>
        <pre>
          <code>
            {`
            import sagemaker
            from sagemaker import get_execution_role

            role = get_execution_role()
            sentiment_model = sagemaker.Model('sentiment-model.tar.gz', role=role)

            predictor = sentiment_model.deploy(initial_instance_count=1, instance_type='ml.m5.large')

            response = predictor.predict('This product is amazing!')
            print(response)
            `}
          </code>
        </pre>

        <h3>Hadoop Job to Extract Hashtags</h3>
        <pre>
          <code>
            {`
            val hashtagCount = tweets
              .flatMap(tweet => tweet.split(" "))
              .filter(word => word.startsWith("#"))
              .map(hashtag => (hashtag, 1))
              .reduceByKey(_ + _)
            hashtagCount.saveAsTextFile("s3://output/hashtags")
            `}
          </code>
        </pre>
      </section>

      {/* Screenshots */}
      <section className="mt-5">
        <h2>Screenshots</h2>
        <img src="/path-to-your-screenshot1" alt="Social Media Analysis" className="img-fluid" />
        <img src="/path-to-your-screenshot2" alt="Sentiment Results" className="img-fluid mt-3" />
      </section>

      {/* YouTube Video */}
      <section className="mt-5">
        <h2>Project Demo Video</h2>
        {/* No video available for this project; omit if not applicable */}
      </section>
    </div>
  );
};

export default SocialMediaAnalysisProject;
