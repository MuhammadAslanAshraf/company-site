import React from 'react';
import { 
  Star, 
  Users, 
  Clock, 
  MessageCircle, 
  Calendar, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ZeroneAboutPage = () => {
  const stats = [
    { value: '1,349+', label: 'Project Done', icon: TrendingUp },
    { value: '1235+', label: 'Happy Customers', icon: Users },
    { value: '4.7', label: 'Client Ratings', icon: Star },
    { value: '15+', label: 'Years of Experience', icon: Clock },
  ];

  const services = [
    'Web Application Development',
    'Mobile Application Development',
    'Custom Software Development',
    'Digital Marketing Services',
    'UI/UX Design',
  ];

  const features = [
    {
      title: 'Experts Team',
      description: 'Zerone is amalgamated of certified professionals only.',
      icon: Award,
    },
    {
      title: '24/7 Support',
      description: 'Our support team is 24/7 accessible to help you.',
      icon: Clock,
    },
    {
      title: 'Communication',
      description: 'We communicate effectively with our clients to ensure a seamless experience.',
      icon: MessageCircle,
    },
    {
      title: 'Adhere to Timeline',
      description: 'We strictly adhere to the time frame provided to client.',
      icon: Calendar,
    },
    {
      title: 'Quality Of Work',
      description: 'We believe in quality and strive to attain it.',
      icon: CheckCircle,
    },
    {
      title: "Client's Satisfaction",
      description: 'We believe in clients satisfaction.',
      icon: Users,
    },
  ];

  const testimonials = [
    {
      name: 'John Goodman',
      position: 'Chief Technology Officer, Securenet',
      content: "Thank you very much for all of your endeavours in upgrading our mobile app. The deadline was close, but you guys came through and accomplished! Thank you for taking the time to understand all of our requirements and for being available to talk about the project at any time. We were pretty grateful.",
      rating: 5,
    },
    {
      name: 'Paul Fish',
      position: 'CEO, 1World Resources, Inc.',
      content: "In a word Zerone is FANTASTIC! Fantastic people, fantastic work, fantastic support. They are quick to respond at any time to fix any issue that arises with our website. We had bad development issues with a substandard company that developed our website. Zerone came to our rescue and quickly and expertly fixed all issues.",
      rating: 5,
    },
    {
      name: 'M.Ahmad',
      position: 'CEO DesertSafariTours',
      content: "Zerone has Magicians in their company. They completely rebuilt my website, designer give me brief and creative ideas and showed a great excellent style that is exactly I want to create. I would like to recommend it.",
      rating: 5,
    },
    {
      name: 'Chris Anderson',
      position: 'CEO at OBDK',
      content: "Zerone is truly magical! Their team rebuilt my website with creative flair and excellent style, precisely as I envisioned. I highly recommend them for top-notch web development services.",
      rating: 5,
    },
    {
      name: 'Adnan',
      position: 'Dubai Fun Tour',
      content: "Zerone has transformed our online presence at Dubai Fun Tour. Their expertise in web development breathed new life into our website, perfectly reflecting the excitement and allure of our travel experiences.",
      rating: 5,
    },
    {
      name: 'Bella',
      position: 'Project B',
      content: "Zerone exceeded all expectations on Project B. Their team's expertise and dedication were evident from day one. They flawlessly executed our vision, delivering a product that surpassed our wildest dreams. Zerone is the epitome of professionalism and excellence in web development.",
      rating: 5,
    },
    {
      name: 'Jeremy Brown',
      position: 'ChildFree BC',
      content: "ChildFree BC has been fortunate to engage Zerone for a year-long project on an hourly basis. Throughout our collaboration, Zerone showcased unparalleled professionalism and dedication. Their commitment to excellence in web development resulted in a product that far exceeded our expectations.",
      rating: 5,
    },
    {
      name: 'Andrew Stephan',
      position: 'Addict Pickleball',
      content: "Zerone is a great team of experts and their communication is really good and professional, they took care of my project with a great professionalism and with awesome skill set will surely be working with them again.",
      rating: 5,
    },
    {
      name: 'Marcel D\'anthony',
      position: 'Kyo Group',
      content: "Zerone's expertise in web development is truly exceptional. They not only brought our vision to life but also provided invaluable insights and recommendations to enhance the user experience and optimize performance.",
      rating: 5,
    },
    {
      name: 'Adam Mahfouda',
      position: 'Oxford',
      content: "Choosing Zerone Software House for the development of our website was one of the best decisions we made for OPGNY. From the initial consultation to the final product launch, their team demonstrated unparalleled expertise and professionalism.",
      rating: 5,
    },
    {
      name: 'Benjamin Thomas',
      position: 'Electric Software',
      content: "Partnering with Zerone Software House for our website development was a decision that significantly elevated Electric Software's online presence. From the outset, Zerone exhibited a rare combination of creativity and technical prowess.",
      rating: 5,
    },
    {
      name: 'Diana Muniz-Lebrun',
      position: 'Olympus Marketing',
      content: "Zerone Software House has been instrumental in transforming our online presence at Olympus Marketing. When we embarked on the journey to redesign our website, we were looking for a partner who could not only understand our brand but also bring creativity and technical expertise to the table.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
        <div className="absolute inset-0 overflow-hidden">
  {/* Blue blob */}
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>

  {/* Purple blob */}
  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-800 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
</div>
        
        <div className="relative lg:pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Zerone</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zerone has proven itself on the website and graphic designing. It is time for you to experience the expert touch.
            </p>
            <div className="inline-block bg-gradient-to-l from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mt-6">
              15+ Years Of Experience
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Business Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Business Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Zerone has been a significant contributor to technological advancements when it comes to dealing with software solutions. Zerone and its dedicated team members have helped develop diverse software solutions that have built our trust and reputation in a similar domain for more than a decade. We have served hundreds of clients worldwide and nationally by assisting them in their software development and designing needs.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600  text-white p-6 rounded-2xl transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Web Apps</div>
                </div>
                <div className="bg-purple-600 text-white p-6 rounded-2xl transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold mb-2">300+</div>
                  <div className="text-sm opacity-90">Mobile Apps</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-l from-indigo-600 to-purple-600 text-white p-6 rounded-2xl transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold mb-2">400+</div>
                  <div className="text-sm opacity-90">UI/UX Designs</div>
                </div>
                <div className="bg-orange-600 text-white p-6 rounded-2xl transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="text-sm opacity-90">Digital Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
              Why Choose Zerone
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clients Reviews
            </h2>
            <p className="text-xl text-gray-600">
              We are very proud of the services we provide. Read our testimonials from our happy customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.content}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              View More Reviews
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20  text-gary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Turn your Query into an Action
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            If you're seeking a fast and accurate quotation for your project, our team of experienced professionals is here to help. Simply share your requirements, and we'll provide you with a detailed response tailored to your goals—efficiently and without delay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/contact' className=" bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
              Contact Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <button className="border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -70px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ZeroneAboutPage;