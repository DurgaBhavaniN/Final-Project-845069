using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public interface ISellerRepository
    {
        void EditProfile(Seller obj);



        Seller GetProfile(string sid);
    }
}
