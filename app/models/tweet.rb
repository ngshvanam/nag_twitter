class Tweet < ActiveRecord::Base
 attr_accessible :content
 belongs_to :user
 default_scope :order => 'tweets.created_at DESC'
end
