using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public interface IItemRepository
    {



        void AddItem(Items itemobj);

        List<Items> ViewItems();

        void DeleteItem(string itemid);
        void UpdateItem(Items itemobj);

        Items GetItem(string itemid);
        List<Category> GetCategory();
         List<SubCategory> GetSubCategory(string cid);


    }
}
