# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170324171851) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "project_id", null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["project_id"], name: "index_comments_on_project_id", using: :btree
  end

  create_table "contributions", force: :cascade do |t|
    t.integer  "amount",     null: false
    t.integer  "reward_id",  null: false
    t.integer  "backer_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["backer_id"], name: "index_contributions_on_backer_id", using: :btree
    t.index ["reward_id"], name: "index_contributions_on_reward_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.integer  "creator_id",        null: false
    t.string   "city",              null: false
    t.string   "state",             null: false
    t.string   "title",             null: false
    t.string   "end_date",          null: false
    t.string   "organization",      null: false
    t.string   "video_url"
    t.string   "project_pic",       null: false
    t.text     "description",       null: false
    t.integer  "funding_goal",      null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "short_description"
    t.index ["creator_id"], name: "index_projects_on_creator_id", using: :btree
  end

  create_table "rewards", force: :cascade do |t|
    t.integer  "project_id",    null: false
    t.float    "amount",        null: false
    t.integer  "limit"
    t.string   "title",         null: false
    t.string   "description",   null: false
    t.string   "delivery_date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["project_id"], name: "index_rewards_on_project_id", using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id", "tag_id"], name: "index_taggings_on_project_id_and_tag_id", unique: true, using: :btree
    t.index ["project_id"], name: "index_taggings_on_project_id", using: :btree
    t.index ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "tag",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "username",        null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
  end

end
