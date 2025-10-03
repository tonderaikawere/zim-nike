import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { Briefcase, MapPin, Clock, Users, Target, Heart, Zap, Search } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Technology',
    location: 'Beaverton, OR',
    type: 'Full-time',
    level: 'Senior',
    description: 'Join our digital innovation team to build the future of Nike\'s e-commerce platform.',
    requirements: ['5+ years React/TypeScript', 'E-commerce experience', 'Agile methodology'],
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Create compelling user experiences for Nike\'s digital products and services.',
    requirements: ['3+ years UX/UI design', 'Figma proficiency', 'Design systems experience'],
    posted: '1 week ago'
  },
  {
    id: 3,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Drive brand awareness and customer engagement through innovative marketing campaigns.',
    requirements: ['5+ years marketing', 'Digital marketing expertise', 'Brand management'],
    posted: '3 days ago'
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'Leverage data to drive business insights and improve customer experiences.',
    requirements: ['PhD in Data Science', 'Python/R proficiency', 'Machine learning'],
    posted: '5 days ago'
  },
  {
    id: 5,
    title: 'Store Manager',
    department: 'Retail',
    location: 'Chicago, IL',
    type: 'Full-time',
    level: 'Manager',
    description: 'Lead a high-performing retail team to deliver exceptional customer experiences.',
    requirements: ['Retail management', 'Team leadership', 'Customer service excellence'],
    posted: '1 day ago'
  },
  {
    id: 6,
    title: 'Supply Chain Analyst',
    department: 'Operations',
    location: 'Memphis, TN',
    type: 'Full-time',
    level: 'Entry-level',
    description: 'Optimize supply chain operations to ensure efficient product delivery worldwide.',
    requirements: ['Supply chain knowledge', 'Excel proficiency', 'Analytical thinking'],
    posted: '4 days ago'
  }
];

const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and fitness programs'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Career Growth',
    description: 'Professional development opportunities, mentorship programs, and skill building'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Inclusive Culture',
    description: 'Diverse and inclusive workplace where everyone can bring their authentic self'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovation',
    description: 'Work on cutting-edge projects that shape the future of sport and lifestyle'
  }
];

const Careers = () => {
  useScrollToTop();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const departments = ['All', 'Technology', 'Design', 'Marketing', 'Analytics', 'Retail', 'Operations'];
  const locations = ['All', 'Beaverton, OR', 'New York, NY', 'Los Angeles, CA', 'Remote', 'Chicago, IL', 'Memphis, TN'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Team Nike</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Help us inspire and innovate for every athlete in the world. If you have a body, you are an athlete.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Nike, we believe in the power of sport to move the world forward. Join a team that's passionate about innovation, diversity, and making a positive impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Search Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                Find your next opportunity and help us shape the future of sport.
              </p>
            </div>

            {/* Filters */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="border rounded-md px-3 py-2 text-sm"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="border rounded-md px-3 py-2 text-sm"
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  <Button onClick={() => {
                    setSearchTerm('');
                    setSelectedDepartment('All');
                    setSelectedLocation('All');
                  }}>
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="space-y-6">
              <p className="text-muted-foreground">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
              </p>
              
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline">{job.level}</Badge>
                        <span className="text-xs text-muted-foreground">{job.posted}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1">Apply Now</Button>
                      <Button variant="outline">Save Job</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredJobs.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Briefcase className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-bold mb-2">No positions found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search criteria or check back later for new opportunities.
                    </p>
                    <Button onClick={() => {
                      setSearchTerm('');
                      setSelectedDepartment('All');
                      setSelectedLocation('All');
                    }}>
                      View All Jobs
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our hiring process is designed to be transparent and give you the best opportunity to showcase your talents.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Apply Online</h3>
                <p className="text-sm text-muted-foreground">
                  Submit your application and resume through our careers portal
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Initial Review</h3>
                <p className="text-sm text-muted-foreground">
                  Our recruiting team reviews your application and qualifications
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Interview Process</h3>
                <p className="text-sm text-muted-foreground">
                  Participate in interviews with hiring managers and team members
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Welcome to Nike</h3>
                <p className="text-sm text-muted-foreground">
                  Join our team and start making an impact from day one
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
