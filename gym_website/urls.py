# gym_website/gym_website/urls.py
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView # For simple static page serving

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')), # Link to your accounts app URLs

    # Serve your existing HTML files
    path('', TemplateView.as_view(template_name='index.html'), name='home_page'), # Your homepage
    path('about.html', TemplateView.as_view(template_name='about.html'), name='about_page'),
    path('blog.html', TemplateView.as_view(template_name='blog.html'), name='blog_page'),
    path('contact.html', TemplateView.as_view(template_name='contact.html'), name='contact_page'),
    path('course.html', TemplateView.as_view(template_name='course.html'), name='course_page'),
    path('feature.html', TemplateView.as_view(template_name='feature.html'), name='feature_page'),
    path('team.html', TemplateView.as_view(template_name='team.html'), name='team_page'),
    path('testimonial.html', TemplateView.as_view(template_name='testimonial.html'), name='testimonial_page'),
    path('404.html', TemplateView.as_view(template_name='404.html'), name='404_page'),

    # You might need to add this for static files during development
    # from django.conf import settings
    # from django.conf.urls.static import static
    # ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
]