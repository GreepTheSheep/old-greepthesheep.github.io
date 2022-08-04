FROM "jekyll/jekyll"
RUN gem install webrick
COPY . /srv/jekyll
EXPOSE 4000
CMD ["jekyll", "serve", "--force_polling", "--trace", "-V"]