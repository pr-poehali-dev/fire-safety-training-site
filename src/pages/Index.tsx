import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const courses = [
    {
      title: 'Основы пожарной безопасности',
      description: 'Фундаментальные принципы предотвращения пожаров',
      progress: 75,
      duration: '4 часа',
      level: 'Начальный',
      status: 'В процессе'
    },
    {
      title: 'Системы пожаротушения',
      description: 'Автоматические и ручные системы пожаротушения',
      progress: 30,
      duration: '6 часов',
      level: 'Средний',
      status: 'Доступен'
    },
    {
      title: 'Эвакуация и планирование',
      description: 'Планы эвакуации и действия в чрезвычайных ситуациях',
      progress: 0,
      duration: '3 часа',
      level: 'Продвинутый',
      status: 'Заблокирован'
    }
  ];

  const quizQuestions = [
    {
      question: 'Какой класс огнетушителя используется для тушения электрооборудования?',
      options: ['Класс A', 'Класс B', 'Класс C', 'Класс D'],
      correct: 2
    },
    {
      question: 'Через какое время должна проводиться проверка пожарной сигнализации?',
      options: ['Раз в месяц', 'Раз в квартал', 'Раз в полгода', 'Раз в год'],
      correct: 1
    },
    {
      question: 'Минимальная ширина эвакуационного прохода должна составлять:',
      options: ['0.8 м', '1.0 м', '1.2 м', '1.5 м'],
      correct: 2
    }
  ];

  const regulations = [
    {
      title: 'ППБ 01-03',
      description: 'Правила пожарной безопасности в Российской Федерации',
      category: 'Основные',
      updated: '2024'
    },
    {
      title: 'СП 1.13130.2020',
      description: 'Системы противопожарной защиты. Эвакуационные пути и выходы',
      category: 'Эвакуация',
      updated: '2020'
    },
    {
      title: 'СП 5.13130.2009',
      description: 'Системы противопожарной защиты. Установки пожарной сигнализации',
      category: 'Сигнализация',
      updated: '2009'
    }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const submitAnswer = () => {
    if (selectedAnswer === quizQuestions[currentQuiz].correct) {
      setQuizScore(quizScore + 1);
    }
    
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">ПожБезопасность</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
              <a href="#regulations" className="text-foreground hover:text-primary transition-colors">Нормативы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Профессиональное обучение по пожарной безопасности
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Комплексная образовательная платформа для специалистов по пожарной профилактике. 
                Актуальные знания, современные методики, практические навыки.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Начать обучение
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/3d754b65-0cbc-4723-8888-ab0b8b78a344.jpg" 
                alt="Пожарная безопасность" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="quiz">Тестирование</TabsTrigger>
            <TabsTrigger value="regulations">Нормативы</TabsTrigger>
            <TabsTrigger value="contact">Контакты</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" id="courses" className="mt-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Доступные курсы</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant={course.status === 'В процессе' ? 'default' : course.status === 'Доступен' ? 'secondary' : 'outline'}>
                          {course.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{course.level}</span>
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Прогресс</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={16} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="BookOpen" size={16} />
                            <span>12 модулей</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full" 
                          disabled={course.status === 'Заблокирован'}
                          variant={course.status === 'В процессе' ? 'default' : 'outline'}
                        >
                          {course.status === 'В процессе' ? 'Продолжить' : course.status === 'Доступен' ? 'Начать курс' : 'Недоступен'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Система тестирования</h3>
              
              {!showResult ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Вопрос {currentQuiz + 1} из {quizQuestions.length}</CardTitle>
                      <Badge>{Math.round(((currentQuiz) / quizQuestions.length) * 100)}% завершено</Badge>
                    </div>
                    <Progress value={((currentQuiz) / quizQuestions.length) * 100} className="mt-2" />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <h4 className="text-lg font-medium">{quizQuestions[currentQuiz].question}</h4>
                    <div className="space-y-3">
                      {quizQuestions[currentQuiz].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(index)}
                          className={`w-full p-4 text-left border rounded-lg transition-colors ${
                            selectedAnswer === index 
                              ? 'border-primary bg-primary/10' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <Button 
                      onClick={submitAnswer}
                      disabled={selectedAnswer === null}
                      className="w-full"
                    >
                      {currentQuiz === quizQuestions.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Результаты теста</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">
                      {Math.round((quizScore / quizQuestions.length) * 100)}%
                    </div>
                    <p className="text-lg">
                      Правильных ответов: {quizScore} из {quizQuestions.length}
                    </p>
                    {quizScore >= quizQuestions.length * 0.8 ? (
                      <Alert className="border-green-200 bg-green-50">
                        <Icon name="CheckCircle" className="h-4 w-4" />
                        <AlertDescription>
                          Отличный результат! Вы успешно прошли тестирование.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Alert className="border-yellow-200 bg-yellow-50">
                        <Icon name="AlertTriangle" className="h-4 w-4" />
                        <AlertDescription>
                          Рекомендуем повторить материал и пройти тест снова.
                        </AlertDescription>
                      </Alert>
                    )}
                    <Button onClick={resetQuiz} className="w-full">
                      Пройти тест заново
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Regulations Tab */}
          <TabsContent value="regulations" id="regulations" className="mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Нормативная база</h3>
              <Accordion type="single" collapsible className="w-full">
                {regulations.map((regulation, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center justify-between w-full mr-4">
                        <div>
                          <div className="font-semibold">{regulation.title}</div>
                          <div className="text-sm text-muted-foreground">{regulation.description}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{regulation.category}</Badge>
                          <span className="text-xs text-muted-foreground">{regulation.updated}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        <p className="text-muted-foreground">
                          Подробная информация о нормативном документе {regulation.title}. 
                          Содержит основные требования и рекомендации по {regulation.category.toLowerCase()}.
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Download" className="h-4 w-4 mr-2" />
                            Скачать PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                            Открыть онлайн
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" id="contact" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Контакты</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Phone" className="h-5 w-5" />
                      <span>Телефон</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Mail" className="h-5 w-5" />
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">info@firesafety.ru</p>
                    <p className="text-muted-foreground">Ответим в течение 24 часов</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="MapPin" className="h-5 w-5" />
                      <span>Адрес</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">г. Москва, ул. Пожарная, д. 15</p>
                    <p className="text-muted-foreground">Учебный центр</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Clock" className="h-5 w-5" />
                      <span>Режим работы</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: выходные</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 ПожБезопасность. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;