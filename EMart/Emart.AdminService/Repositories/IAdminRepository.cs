using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        List<Category> ViewCategories();
        List<SubCategory> ViewSubcategories();
        void AddCategory(Category obj);
        void AddSubCategory(SubCategory obj);
        void DeleteCategory(string cname);
        void DeleteSubCategory(string subid);
        public List<Category> GetCategory();
        public List<SubCategory> GetSubCategory();
        Category GetCatById(string cid);
        SubCategory GetSCatById(string subid);
        void UpdateCategory(Category obj);
        void UpdateSubCategory(SubCategory obj);
    }
}
