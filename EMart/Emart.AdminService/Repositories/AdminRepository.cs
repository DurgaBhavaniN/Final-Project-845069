﻿using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    
        public class AdminRepository : IAdminRepository
        {

            private readonly EmartDBContext _context;
            public AdminRepository(EmartDBContext context)
            {
                _context = context;

            }
            public void AddCategory(Category iobj)
            {

                _context.Add(iobj);
                _context.SaveChanges();
            }
        public void AddSubCategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }
        public void DeleteCategory(string cid)
        {
            Category c = _context.Category.Find(cid);
            _context.Remove(c);
            _context.SaveChanges();
        }
        public void DeleteSubCategory(string subid)
        {
            SubCategory s = _context.SubCategory.Find(subid);
            _context.Remove(s);
            _context.SaveChanges();
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategory()
        {
            return _context.SubCategory.ToList();

        }
        public List<Category> ViewCategories()
        {


            return _context.Category.ToList();
        }
        public List<SubCategory> ViewSubcategories(string cid)
        {
            return _context.SubCategory.Where(res => res.CategoryId == cid).ToList();
        }
        public Category GetCatById(string cid)
        {
            return _context.Category.Find(cid);
        }
        public SubCategory GetSCatById(string subid)
        {
            return _context.SubCategory.Find(subid);
        }
        public void UpdateCategory(Category obj)
        {
            _context.Category.Update(obj);
            _context.SaveChanges();
        }
        public void UpdateSubCategory(SubCategory obj)
        {
            _context.SubCategory.Update(obj);
            _context.SaveChanges();
        }

    }
    }
