module ApplicationHelper

def tweets

	@tweets = [];
	current_user.tweets.each do |tweet|
	   @tweets.push(tweet)
        end

	current_user.following.each do |u|
	   u.tweets.each do |tweet|
		#tweet[username]=u.name;
		@tweets.push(tweet)
	   end
	end
	@tweets.sort_by(&:created_at).reverse

end

end
