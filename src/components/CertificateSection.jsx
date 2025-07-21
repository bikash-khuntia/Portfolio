import namaste from '../../public/projects/certificate.webp'
// import img from '../../public/projects/new_image.jpeg'


const certificates = [
  {
    image: namaste,
    title: 'Namaste React',
    issuer: 'Akshay Saini',
    keyLearnings: [
      'React Fundamentals',
      'Hooks',
      'Routing',
      'API Integration',
    ],
  },
  {
    title: 'Web Development',
    image: '/certificates/how.png',
    issuer: 'Apana College',
    keyLearnings: ["Html", "Css", "Javascript", "Tailwindcss", "Node.js", "Express.js", "Mongodb"],
  },
];

export default function CertificateSection() {
  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Certificates
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Issued by:</span> {cert.issuer}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {cert.keyLearnings.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
